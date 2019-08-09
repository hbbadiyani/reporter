import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

describe('Testing header', () => {
    it('renders an header', () => {
        const sut = shallow(<Header />);
        expect(sut.find('div').prop('id')).toEqual('bui-site-header');
    });
});
