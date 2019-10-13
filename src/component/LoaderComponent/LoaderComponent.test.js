import React from 'react';

import { LoaderComponent } from './LoaderComponent';

describe('Loader Component', () => {

  it('should render', () => {
    const wrapper = shallow(<LoaderComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
