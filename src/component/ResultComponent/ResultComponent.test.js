import React from 'react';

import { ResultComponent } from './ResultComponent';
import { Item } from 'semantic-ui-react';

describe('Result Component', () => {
  let
    onSubmitStub,
    minProps;

  beforeAll(() => {
    onSubmitStub = jest.fn();
    minProps = {
      result: null,
      submit: false,
      onSubmit: onSubmitStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<ResultComponent {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loader if results not available', () => {
    const diffProps = {
      submit: true,
    };
    const wrapper = shallow(<ResultComponent {...minProps} {...diffProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render results if available', () => {
    const diffProps = {
      result: {
        status: 'Success',
        input: '0',
        output: 'Zero',
      },
    };
    const wrapper = shallow(<ResultComponent {...minProps} {...diffProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
