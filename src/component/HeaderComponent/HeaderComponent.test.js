import React from 'react';

import { HeaderComponent } from './HeaderComponent';

describe('Header Component', () => {

  it('should render', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
