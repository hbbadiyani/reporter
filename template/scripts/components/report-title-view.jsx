import React, { Component } from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class ReportTitleView extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        report: PropTypes.object.isRequired
    };


    render() {
        const { report } = this.props;

        if (!report) {
            return null;
        }


        return (
            <table className="b-table b-border b-hover">
                <thead className="b-dark">
                    <tr>
                        <th>Accepted</th>
                        <th>Assessed</th>
                        <th>ExecutionTime</th>
                        <th>Total reqierments</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{report.accepted}</td>
                    <td>{report.assessed}</td>
                    <td>{report.executionTime}</td>
                    <td>{Object.keys(report.requirements).length}</td>
                </tbody>
            </table>
        );
    }
}

export default ReportTitleView;
