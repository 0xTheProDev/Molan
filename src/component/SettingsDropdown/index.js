import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup, Checkbox, Button, Icon, Header } from 'semantic-ui-react';
import './index.css';

export default class SettingsDropdown extends Component {
    static propTypes = {
        defaultChecked:   PropTypes.bool.isRequired,
        darkThemed:       PropTypes.bool.isRequired,
        onChangeLineNum:  PropTypes.func.isRequired,
        onChangeTheme:    PropTypes.func.isRequired,
        isFullScreen:     PropTypes.bool.isRequired,
        onFullScreen:     PropTypes.func.isRequired
    };    

    render() {
        const { darkThemed, onChangeTheme, isFullScreen, onFullScreen } = this.props;

        return (
            <div>
                <Popup
                  trigger={<Button floated='right' basic><Icon name='settings'/></Button>}
                  on='click'
                  position='bottom center'
                >
                    <Header as='h5'>Settings</Header>
                    {
                        /*
                        <Checkbox
                            label="Show Line Numbers"
                            checked={this.props.defaultChecked}
                            onChange={this.props.onChangeLineNum}
                        />
                        */
                    }
                    <Checkbox
                        label="Night Mode"
                        checked={darkThemed}
                        onChange={onChangeTheme}
                    />
                    <Checkbox
                        label="Full Screen"
                        checked={isFullScreen}
                        onChange={onFullScreen}
                    />
                </Popup>
            </div>
        );
    }
}