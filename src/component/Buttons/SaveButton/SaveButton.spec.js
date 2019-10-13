import React from 'react';
import { Button } from 'semantic-ui-react';

import { SaveButton } from './SaveButton';

describe('Component::Buttons:SaveButton::SaveButton', () => {
  let
    onSaveButtonClickStub,
    minProps;

  beforeAll(() => {
    onSaveButtonClickStub = jest.fn();

    minProps = {
      SaveButtonText: 'Save',
      onSaveButtonClick: onSaveButtonClickStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<SaveButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke callback handler when button clicked', () => {
    const wrapper = shallow(<SaveButton {...minProps} />);

    wrapper.find(Button).simulate('click');

    expect(onSaveButtonClickStub).toHaveBeenCalled();
  });
});
