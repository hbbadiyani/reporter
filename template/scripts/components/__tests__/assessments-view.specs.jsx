
import React from 'react';
import { shallow } from 'enzyme';

import AssessmentsVeiw from '../assessments-view';

describe('Testing Assessment View', () => {
    it('it should render Assessment', () => {
        const requirement = {
            accepted: true,
            assessed: 0,
            description: 'All text must appear on top of a solid color',
            experimental: true,
            failed: 0,
            failedAssessments: [],
            impact: 'The default background color for most browsers is white but this value can be overridden, if a solid background color is not used, then the color that is used as default cannot be determined and may make the text unreadable',
            message: 'The document has a solid background color',
            passed: 0,
            passedAssessments: [
                {
                    assessments: {
                        'has-an-accessible-name': true
                    },
                    description: 'Accessible name is present',
                    detail: "This button's accessible name is \"Sign-In\"",
                    node: {
                        ELEMENT: '0.05025049312500762-19'
                    },
                    selector: '#signInSubmit'
                }
            ],
            severity: 'low',
            status: 'fulfillment'
        };


        const sut = shallow(<AssessmentsVeiw assessments={requirement.passedAssessments} />);
        expect(sut.find('table')).toHaveLength(1);
    });
});
