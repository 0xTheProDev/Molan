import React from 'react';

import { HeaderComponent } from './HeaderComponent';

describe('Component::HeaderComponent', () => {
  it('should render with base structure', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
