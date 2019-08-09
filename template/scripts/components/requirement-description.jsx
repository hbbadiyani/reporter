import React, { Component } from 'react';
import SimpleLayout, { Title } from 'bui/layouts/simple-layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AssessmentView from './assessments-view';
import Header from './header';

const mapStateToProps = state => ({
    reports: state.Reports,
    referenceLinks: state.ReferenceLinks
});
// eslint-disable-next-line react/prefer-stateless-function
class RequirementDescription extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        reports: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        match: PropTypes.object.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        referenceLinks: PropTypes.object.isRequired
    };

    render() {
        const { reports, match, referenceLinks } = this.props;

        const { scan } = match.params;
        const { requirement } = match.params;
        const requirementDetails = reports[scan].requirements[requirement];


        return (
            <SimpleLayout>
                <Header />
                <Title className="b-pt-large">
                    <Link className="b-link" to="/">Summary</Link>
                    <br />
                    <Link className="b-link" to={`/${scan}`}>{reports[scan].title}</Link>
                    <br />
                    <h2>{requirement}</h2>


                    <table className="b-table b-border">
                        <thead className="b-dark">
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Severity</th>
                                <th>Message</th>
                                <th>impact</th>
                                <th>failed</th>
                                <th>passed</th>
                                <th>assessed</th>
                                <th>Reference Link</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>{requirementDetails.description}</td>
                            <td>{requirementDetails.status}</td>
                            <td>{requirementDetails.severity}</td>
                            <td>{requirementDetails.message}</td>
                            <td>{requirementDetails.impact}</td>
                            <td>{requirementDetails.failed}</td>
                            <td>{requirementDetails.passed}</td>
                            <td>{requirementDetails.assessed}</td>
                            <td>{Object.prototype.hasOwnProperty.call(referenceLinks, requirement) ? <a href={referenceLinks[requirement]}>BUI Reference</a> : 'NA' }</td>
                        </tr>
                    </table>
                    <h4>
                        Total failed =
                        {' '}
                        {requirementDetails.failed}
                    </h4>
                    <AssessmentView assessments={requirementDetails.failedAssessments} />
                    <h4>
                        Total passed =
                        {' '}
                        {requirementDetails.passed}
                    </h4>
                    <AssessmentView assessments={requirementDetails.passedAssessments} />
                </Title>
            </SimpleLayout>
        );
    }
}

export default connect(mapStateToProps)(RequirementDescription);
