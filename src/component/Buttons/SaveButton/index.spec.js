import React from 'react';
import { Button } from 'semantic-ui-react';
import * as SaveAs from 'save-as';

import SaveButton from './index';

describe('Component::Buttons:SaveButton::Integration Suite', () => {
  const
    Language   = 'c',
    Content    = '#include <stdio.h>\n\nint main(void) {\n\nreturn 0;\n}\n';

  let
    originalURLConstructor,
    saveAsStub,
    minProps;

  beforeAll(() => {
    saveAsStub = jest.spyOn(SaveAs, 'saveAs');

    originalURLConstructor = URL;
    global.URL = {
      createObjectURL: jest.fn(),
    };

    minProps = {
      SaveButtonText: 'Save',
      language: Language,
      content: Content,
    };
  });

  afterAll(() => {
    jest.restoreAllMocks();
    global.URL = originalURLConstructor;
  });

  it('should render with base structure', () => {
    const wrapper = mount(<SaveButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should store content in file when user clicks on Save button', () => {
    const wrapper = mount(<SaveButton {...minProps} />);

    /** User clicks on Save Button */
    wrapper.find(Button).simulate('click');

    /** File should be prepared for download */
    expect(saveAsStub).toHaveBeenCalled();
  });
});
