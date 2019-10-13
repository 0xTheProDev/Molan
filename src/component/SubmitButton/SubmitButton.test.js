import React from 'react';
import { Button } from 'semantic-ui-react';

import { SubmitButton } from './SubmitButton';

describe('Submit Button', () => {
  let
    submitStub,
    onCallbackStub,
    minProps;

  beforeAll(() => {
    submitStub = jest.fn();
    onCallbackStub = jest.fn();

    minProps = {
      lang: 'c',
      code: 'int main(void)',
      checked: false,
      service: {},
      submit: submitStub,
      onCallback: onCallbackStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<SubmitButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not submit code if service unavailable', () => {
    const wrapper = shallow(<SubmitButton {...minProps} />);
    wrapper.find(Button).simulate('click');
    expect(submitStub).not.toHaveBeenCalled();
  });

  it('should submit code in proper structure', () => {
    const diffProps = {
      service: {
        status: true,
      },
      checked: true,
      input: 'Custom Input',
    };
    const wrapper = shallow(<SubmitButton {...minProps} {...diffProps} />);
    wrapper.find(Button).simulate('click');
    expect(submitStub).toHaveBeenCalledWith({
      id: expect.any(Number),
      language: minProps.lang,
      source: minProps.code,
      haveInput: diffProps.checked,
      input: diffProps.input
    });
  })
});
