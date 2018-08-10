import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import template from 'util/template';

const langOptions = Array.from(template, e => {
    return {
        key:   e.lang,
        value: e.lang,
        text:  e.name
    };
});

export default class DropdownSelection extends Component {
    static propTypes = {
        defaultLang: PropTypes.string.isRequired,
        onChange:    PropTypes.func.isRequired
    };

    render() {
        return (
            <Select
              placeholder="Select a language"
              value={this.props.defaultLang}
              options={langOptions}
              onChange={this.props.onChange}
            />
        );
    }
}