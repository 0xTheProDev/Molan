import React from 'react';
import { Button } from 'semantic-ui-react';

import { UploadButton } from './UploadButton';

describe('Component::Buttons:UploadButton::UploadButton', () => {
  let
    onChangeHandlerStub,
    onClickHandlerStub,
    refObjectStub,
    minProps;

  beforeAll(() => {
    onChangeHandlerStub = jest.fn();
    onClickHandlerStub = jest.fn();

    refObjectStub = React.createRef();

    minProps = {
      AllowedFileTypes: 'text/plain',
      InputElementRef: refObjectStub,
      UploadButtonText: 'Upload',
      onChangeHandler: onChangeHandlerStub,
      onClickHandler: onClickHandlerStub,
    }; 
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<UploadButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should store reference of InputElement', () => {
    mount(<UploadButton {...minProps} />);
    expect(refObjectStub.current).toBeTruthy();
  });

  it('should call onClickHandler when button is clicked', () => {
    const wrapper = shallow(<UploadButton {...minProps} />);

    wrapper.find(Button).simulate('click');
    expect(onClickHandlerStub).toHaveBeenCalled();
  });

  it('should call onChange handler when file input value changes', () => {
    const wrapper = shallow(<UploadButton {...minProps} />);

    wrapper.find('input').simulate('change');
    expect(onChangeHandlerStub).toHaveBeenCalled();
  });
});
