import React from 'react';
import { Button } from 'semantic-ui-react';
import { SERVICE_STATUS } from 'constants/services';

import FooterComponent from './_index';

describe('Component::FooterComponent::Integration Suite', () => {
  let
    reloadServiceStatusStub,
    minProps;

  beforeAll(() => {
    reloadServiceStatusStub = jest.fn();

    minProps = {
      ServiceStatus: SERVICE_STATUS.LOADING,
      reloadServiceStatus: reloadServiceStatusStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = mount(<FooterComponent {...minProps} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ ServiceStatus: SERVICE_STATUS.READY });
    expect(wrapper).toMatchSnapshot();
  });

  it('should reload service status when button clicked', () => {
    const wrapper = mount(<FooterComponent {...minProps} />);

    wrapper
      .find(Button)
      .simulate('click');

    expect(reloadServiceStatusStub).toHaveBeenCalled();
  });
});
