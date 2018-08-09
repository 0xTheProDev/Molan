import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

const langOptions = [
    { key: 1, value: "c", text: "C" }
];

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