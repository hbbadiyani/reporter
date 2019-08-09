import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AssessmentsView extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        assessments: PropTypes.array.isRequired
    };


    render() {
        const { assessments } = this.props;
        if (!assessments || assessments.length === 0) { return null; }
        const assessmentsTable = assessments.map(node => (
            <tr key={node.node.ELEMENT} className="b-border">
                <td>{node.description}</td>
                <td>{node.detail}</td>
                <td>{node.fix || 'NA'}</td>
                <td>{node.selector}</td>
            </tr>
        ));

        return (
            <div>
                <table className="b-table b-border b-hover">
                    <thead className="b-dark">
                        <tr>
                            <th>Description</th>
                            <th>Detail</th>
                            <th>Fix</th>
                            <th>Selector</th>
                        </tr>
                    </thead>
                    <tbody>{assessmentsTable}</tbody>
                </table>
            </div>

        );
    }
}

export default AssessmentsView;
