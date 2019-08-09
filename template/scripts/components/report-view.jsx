import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import SimpleLayout, { Title, Content } from 'bui/layouts/simple-layout';
import ReportTitle from './report-title-view';
import Header from './header';


const mapStateToProps = state => ({
    reports: state.Reports
});
// eslint-disable-next-line react/prefer-stateless-function
class ReportView extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        reports: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        match: PropTypes.object.isRequired
    };

    render() {
        const { reports, match } = this.props;
        const reportId = match.params.scan;
        const report = reports[parseInt(reportId, 10)];
        const reportTable = Object.entries(report.requirements).map(([key, value]) => (
            <tr key={key} className="b-border">
                <td><Link to={`/${reportId}/${key}`}>{key}</Link></td>
                <td>{value.description}</td>
                <td>{value.severity}</td>
                <td>{value.failed}</td>
                <td>{value.assessed}</td>
            </tr>
        ));
        return (
            <SimpleLayout>
                <Header />
                <Title className="b-pt-large">
                    <Link className="b-link" to="/">Summary</Link>
                    <ReportTitle report={report} />
                </Title>
                <Content>
                    <table className="b-table b-border b-hover">
                        <thead className="b-dark">
                            <tr>
                                <th>Requirement name</th>
                                <th>Description</th>
                                <th>Severity</th>
                                <th>Total failed</th>
                                <th>Total assessed</th>
                            </tr>
                        </thead>
                        <tbody>{reportTable}</tbody>
                    </table>
                </Content>
            </SimpleLayout>
        );
    }
}

export default connect(mapStateToProps)(ReportView);
