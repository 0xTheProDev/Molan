import React from 'react';

import { IOComponent } from './IOComponent';
import { COMPILE_ERROR_STATUS, COMPILE_ERROR_STATUS_COLOR } from './IOComponent.constants';

describe('Component::IOComponent::IOComponent', () => {
  let minProps;

  beforeAll(() => {
    minProps = {
      color: COMPILE_ERROR_STATUS_COLOR,
      status: COMPILE_ERROR_STATUS,
      input: 'Some Input Here',
      output: 'Some Output Here',
    };
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<IOComponent {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
