
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import mockStore from './test-helper';
import SummaryView from '../summary-view';

describe('Testing Summary View', () => {
    it('it should render SummaryView', () => {
        const initialState = {
            Reports: [
                {
                    title: 'scan0',
                    unaccepted: 4,
                    assessed: 10,
                    requirements: {
                        'background-color-is-set': {
                            assessed: 0,
                            failed: 5
                        },
                        'buttons-have-accessible-names': {
                            assessed: 2,
                            failed: 8
                        }
                    }
                },
                {
                    title: 'scan1',
                    unaccepted: 4,
                    assessed: 10,
                    requirements: {
                        'background-color-is-set': {
                            assessed: 0,
                            failed: 5
                        },
                        'buttons-have-accessible-names': {
                            assessed: 2,
                            failed: 8
                        }
                    }
                }
            ]

        };

        const props = { store: mockStore(initialState) };
        const sut = shallow(<SummaryView {...props} />).dive();

        initialState.Reports.forEach((report, index) => {
            expect(sut.find(Link).find({ to: `/${index}` }).props().children).toBe(report.title);
        });
    });
});
