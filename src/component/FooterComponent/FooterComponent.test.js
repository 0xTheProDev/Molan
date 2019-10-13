import React from 'react';

import { FooterComponent } from './FooterComponent';

describe('Footer Component', () => {
  let
    originalAddEventListener,
    addEventListenerStub,
    getStatusStub,
    minProps;

  beforeAll(() => {
    originalAddEventListener = global.addEventListener
    addEventListenerStub = jest.fn();
    global.addEventListener = addEventListenerStub;

    getStatusStub = jest.fn();
    minProps = {
      service: {},
      getStatus: getStatusStub,
    };
  });

  afterAll(() => {
    global.addEventListener = originalAddEventListener;
  });

  it('should render', () => {
    const wrapper = shallow(<FooterComponent {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show service status when service is up', () => {
    const diffProps = {
      service: {
        status: true,
      },
    };
    const wrapper = shallow(<FooterComponent {...minProps} {...diffProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show service status when service is up', () => {
    const diffProps = {
      service: {
        status: false,
      },
    };
    const wrapper = shallow(<FooterComponent {...minProps} {...diffProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should listen to network status', () => {
    const _wrapper = shallow(<FooterComponent {...minProps} />);
    expect(addEventListenerStub).toBeCalledWith('online', expect.any(Function));
    expect(addEventListenerStub).toBeCalledWith('offline', expect.any(Function));
  });

  it('should refetch service status when clicked on icon', () => {
    const wrapper = shallow(<FooterComponent {...minProps} />);
    wrapper.find('.service-status').simulate('click');
    expect(getStatusStub).toHaveBeenCalled();
  });
});
