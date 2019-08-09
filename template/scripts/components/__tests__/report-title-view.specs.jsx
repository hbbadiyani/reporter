
import React from 'react';
import { shallow } from 'enzyme';

import ReportTitleView from '../report-title-view';

describe('Testing Report Title View', () => {
    it('it should render Report Title', () => {
        const report = {
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
        };

        const sut = shallow(<ReportTitleView report={report} />);
        expect(sut.find('table')).toHaveLength(1);
    });
    it('it should not render the report title when no report', () => {
        const report = undefined;
        const sut = shallow(<ReportTitleView report={report} />);
        expect(sut.find('table')).toHaveLength(0);
    });
});
