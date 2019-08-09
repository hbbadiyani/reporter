import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SimpleLayout, { Title, Content } from 'bui/layouts/simple-layout';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
    reports: state.Reports
});

// eslint-disable-next-line react/prefer-stateless-function
class SummaryView extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        reports: PropTypes.array.isRequired
    };

    render() {
        const { reports } = this.props;
        const scanTable = reports.map((rep, index) => {
            const info = Object.values(rep.requirements).reduce((accumulator, currentValue) => {
                accumulator.assessed += currentValue.assessed;
                accumulator.failed += currentValue.failed;
                return accumulator;
            }, { assessed: 0, failed: 0 });
            return (
                <tr key={rep.title} className="b-border">
                    <td><Link to={`/${index}`}>{rep.title}</Link></td>
                    <td>{rep.unaccepted}</td>
                    <td>{rep.assessed}</td>
                    <td>{info.failed}</td>
                    <td>{info.assessed}</td>
                </tr>
            );
        });

        return (
            <SimpleLayout>
                <Header />
                <Title className="b-pt-large">
                    <h1> Summary View </h1>
                </Title>
                <Content>
                    <table className="b-table b-border b-hover">
                        <thead className="b-dark">
                            <tr>
                                <th>Scan name</th>
                                <th>Total requirements failed</th>
                                <th>Total requirements assessed</th>
                                <th>Total DOM Nodes failed</th>
                                <th>Total DOM Nodes assessed</th>
                            </tr>
                        </thead>
                        <tbody>{scanTable}</tbody>
                    </table>
                </Content>
            </SimpleLayout>
        );
    }
}
export default connect(mapStateToProps)(SummaryView);
