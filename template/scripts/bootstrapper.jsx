// eslint-disable-next-line
P.register('Translations', () => {
    return {
        languageCode: 'en',
        messages: null,
    };
});
// Wait on "bas-vendor" to be loaded to gain access to 3rd party libraries
P.when('Translations', 'bas-vendor').execute((translations, deps) => {
    const App = require('./app').default; // eslint-disable-line global-require
    new App(deps, window.a11yResults).render(document.getElementById('bui-root'));
});
