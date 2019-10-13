import React from 'react';
import { COMPILER_STATUS } from 'constants/services';

import IOComponent from './index';

describe('Component::IOComponent::Integration Suite', () => {
  let minProps;

  beforeAll(() => {
    minProps = {
      input: 'Some Input here',
      output: 'Some Output here',
    };
  });

  it('should render with base structure', () => {
    Object.keys(COMPILER_STATUS).forEach(status => {
      const wrapper = mount(<IOComponent {...minProps} status={COMPILER_STATUS[status]} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
