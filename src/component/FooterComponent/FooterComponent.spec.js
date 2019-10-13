import React from 'react';
import { Button } from 'semantic-ui-react';

import { FooterComponent, CopyRightSection, ServiceStatusSection } from './FooterComponent';
import { SERVICE_STATUS_OPTIONS } from './FooterComponent.constants';

describe('Component::FooterComponent::FooterComponent', () => {
  it('should render with base structure', () => {
    const wrapper = shallow(<FooterComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render status icon and text properly when service loaded', () => {
    const wrapper = shallow(<FooterComponent ServiceStatus={SERVICE_STATUS_OPTIONS.READY} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render status icon and text properly when service failed', () => {
    const wrapper = shallow(<FooterComponent ServiceStatus={SERVICE_STATUS_OPTIONS.ERROR} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Test CopyRightSection', () => {
    it('should render with base structure', () => {
      const wrapper = shallow(<CopyRightSection {...FooterComponent.defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Test ServiceStatusSection', () => {
    it('should render with base structure', () => {
      const wrapper = shallow(<ServiceStatusSection {...FooterComponent.defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render status icon and text properly when service loaded', () => {
      const wrapper = shallow(<ServiceStatusSection {...FooterComponent.defaultProps} ServiceStatus={SERVICE_STATUS_OPTIONS.READY} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render status icon and text properly when service failed', () => {
      const wrapper = shallow(<ServiceStatusSection {...FooterComponent.defaultProps} ServiceStatus={SERVICE_STATUS_OPTIONS.ERROR} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should reload service status when clicked', () => {
      const reloadServiceStatusStub = jest.fn();

      const wrapper = shallow(<ServiceStatusSection {...FooterComponent.defaultProps} reloadServiceStatus={reloadServiceStatusStub} />);
      wrapper
        .find(Button)
        .simulate('click');

      expect(reloadServiceStatusStub).toHaveBeenCalled();
    });
  });
});
