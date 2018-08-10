import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default class SubmitButton extends Component {
    static propTypes = {
        onCallback: PropTypes.func.isRequired
    };

    onClick = () => {
        this.props.onCallback();
    };

    render() {
        return (
            <Button
              type='button'
              size='large'
              floated='right'
              color='green'
              onClick={this.onClick}
            >Submit</Button>
        );
    }
}