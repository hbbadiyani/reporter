
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import mockStore from './test-helper';
import ReportView from '../report-view';

describe('Testing Report View', () => {
    it('it should render Report', () => {
        const initialState = {
            Reports: [
                {
                    title: 'scan0',
                    accepted: 15,
                    assessed: 16,
                    executionTime: 51,
                    requirements: {
                        'background-color-is-set': {
                            assessed: 0,
                            description: 'All text must appear on top of a solid color'
                        },
                        'buttons-have-accessible-names': {
                            assessed: 2,
                            description: 'All buttons must have accessible names'
                        },
                        'form-inputs-have-accessible-names': {
                            assessed: 2,
                            description: 'All form inputs must have accessible names'
                        }
                    }
                }
            ]
        };

        const props = { store: mockStore(initialState), match: { params: { scan: '0' } } };
        const sut = shallow(<ReportView {...props} />).dive();

        const reportId = 0;

        Object.keys(initialState.Reports[0].requirements).forEach(req => expect(sut.find(Link).find({ to: `/${reportId}/${req}` }).props().children).toBe(req));
    });
});
