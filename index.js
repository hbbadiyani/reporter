/* eslint-disable */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const glob = require('glob');
const mkdirp = require('mkdirp');

const templateDir = path.resolve(__dirname, '../dist/template');

class JestBitsRepoter {
    constructor(globalConfig, options) {
        this.globalConfig = globalConfig;
        this.options = options;
    }

    async onRunComplete(contexts, results) {
        const { outputDir, scanDirectory } = this.options;

        const data = {
            testResults: results,
            title: path.basename(outputDir).replace('-',' '),
            a11yResults: []
        };


        console.log(`Creating output directory if it doesn't exist: ${outputDir}`);

        mkdirp.sync(outputDir);

        async function readJSONFiles(dir) {
            console.log(`Reading scan results from: ${dir}`)
            await glob(`${dir}/*.json`, (err, jsonFiles) => {
                if (err) console.error(err);
                for (const jsonFile of jsonFiles) {
                    fs.readFile(jsonFile, 'utf-8', (error, contents) => {
                        if (error) console.error(error);
                        const obj = JSON.parse(unescape(contents));

                        obj.title = jsonFile.replace(/^.*[\\\/]/, '').replace('.json', '');
                        data.a11yResults.push(obj);
                    });
                }
            });
        }

        async function writeTemplateDirFiles() {
            await glob(`${templateDir}/**/*.*`, (err, templateFiles) => {
                if (err) console.error(err);
                templateFiles.forEach((templateFile) => {
                    const relativePath = templateFile.replace(templateDir, '').replace('.ejs', '');
                    const outputFile = path.join(outputDir, relativePath);

                    mkdirp.sync(path.dirname(outputFile));
                    ejs.renderFile(templateFile, data, (er, str) => {
                        if (er) console.error(er);
                        fs.writeFileSync(outputFile, str, 'utf-8');
                    });
                });
            });
        }

        await readJSONFiles(scanDirectory);
        await writeTemplateDirFiles();
        console.log(`📦 reporter is created at ${outputDir}`);
    }
}

module.exports = JestBitsRepoter;
