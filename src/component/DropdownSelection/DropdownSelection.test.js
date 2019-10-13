import React from 'react';
import { Select } from 'semantic-ui-react';

import { DropdownSelection } from './DropdownSelection';

describe('Dropdown Selection', () => {
  let
    onChangeStub,
    minProps;

  beforeAll(() => {
    onChangeStub = jest.fn();

    minProps = {
      defaultLang: 'c',
      onChange: onChangeStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<DropdownSelection {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change language on select', () => {
    const wrapper = shallow(<DropdownSelection {...minProps} />);
    wrapper.find(Select).simulate('change');
    expect(onChangeStub).toHaveBeenCalled();
  });
});
