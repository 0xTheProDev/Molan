import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup, Checkbox, Button, Icon, Header } from 'semantic-ui-react';

export default class SettingsDropdown extends Component {
    static propTypes = {
        defaultChecked:   PropTypes.bool.isRequired,
        darkThemed:       PropTypes.bool.isRequired,
        onChangeLineNum:  PropTypes.func.isRequired,
        onChangeTheme:    PropTypes.func.isRequired
    };    

    render() {
        return (
            <div>
                <Popup
                  trigger={<Button floated='right' basic><Icon name='settings'/></Button>}
                  on='click'
                  position='bottom center'
                >
                    <Header as='h5'>Settings</Header>
                    <Checkbox
                        label="Show Line Numbers"
                        checked={this.props.defaultChecked}
                        onChange={this.props.onChangeLineNum}
                    />
                    <Checkbox
                        label="Night Mode"
                        checked={this.props.darkThemed}
                        onChange={this.props.onChangeTheme}
                    />
                </Popup>
            </div>
        );
    }
}