import React from 'react';
import { Button } from 'semantic-ui-react';

import { ReloadButton } from './ReloadButton';

describe('Component::Buttons:ReloadButton', () => {
  let
    minProps,
    onReloadStub;

  beforeAll(() => {
    onReloadStub = jest.fn();
    minProps = {
      ReloadButtonText: 'Reload',
      onReload: onReloadStub,
    };
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<ReloadButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke callback prop when button clicked', () => {
    const wrapper = shallow(<ReloadButton {...minProps} />);
    wrapper.find(Button).simulate('click');
    expect(onReloadStub).toHaveBeenCalled();
  });
});
