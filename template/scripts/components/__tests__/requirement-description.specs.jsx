
import React from 'react';
import { shallow } from 'enzyme';
import mockStore from './test-helper';
import RequirementDescription from '../requirement-description';

describe('Testing Requierment Description component', () => {
    it('it should render Requierment description', () => {
        const initialState = {
            Reports: [
                {
                    title: 'scan0',
                    accepted: 15,
                    assessed: 16,
                    executionTime: 51,
                    requirements: {
                        color: {
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
                        }
                    }
                }
            ],
            ReferenceLinks: { color: 'https://bui.corp.amazon.com/components/#/radio-button' }
        };
        const props = { store: mockStore(initialState), match: { params: { scan: '0', requirement: 'color' } } };
        const sut = shallow(<RequirementDescription {...props} />).dive();
        expect(sut.find('table')).toHaveLength(1);
    });
});
