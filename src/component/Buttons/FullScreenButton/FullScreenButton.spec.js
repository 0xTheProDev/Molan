import React from 'react';
import { Button } from 'semantic-ui-react';

import { FullScreenButton } from './FullScreeenButton';

describe('Component::FullScreenButton', () => {
  let
    toggleFullScreenModeStub,
    minProps;

  beforeAll(() => {
    toggleFullScreenModeStub = jest.fn();

    minProps = {
      isFullScreenMode: true,
      toggleFullScreenMode: toggleFullScreenModeStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<FullScreenButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke callback when Button clicked', () => {
    const wrapper = shallow(<FullScreenButton {...minProps} />);
    wrapper
      .find(Button)
      .simulate('click');

    expect(toggleFullScreenModeStub).toHaveBeenCalled();
  });
});
