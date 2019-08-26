// @flow
import React from 'react';
import { Select } from 'semantic-ui-react';
import template from 'util/template';

const langOptions = Array.from(template, e => {
  return {
    key: e.lang,
    value: e.lang,
    text: e.name
  };
});

function DropdownSelection(props) {
  return (
    <Select
      placeholder="Select a language"
      value={props.defaultLang}
      options={langOptions}
      onChange={props.onChange}
    />
  );
}

export default DropdownSelection;
