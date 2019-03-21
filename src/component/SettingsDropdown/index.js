import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup, Checkbox, Button, Icon, Header } from 'semantic-ui-react';
import './index.css';

export default class SettingsDropdown extends Component {
    static propTypes = {
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
                  trigger={<Button floated='right' title='Settings' basic><Icon name='settings'/></Button>}
                  on='click'
                  position='bottom center'
                >
                    <Header as='h5'>Settings</Header>
                    <Checkbox
                      label="Night Mode"
                      checked={darkThemed}
                      onChange={onChangeTheme}
                    />
                    <Checkbox
                      label="Show Line Numbers"
                      checked={this.props.lineNumbers}
                      onChange={this.props.onChangeLineNum}
                    />
                    <Checkbox
                      label="Show Minimap"
                      checked={this.props.minimap}
                      onChange={this.props.onChangeMinimap}
                    />
                </Popup>
                <Button basic
                  floated='right'
                  title='Full Screen'
                  active={isFullScreen}
                  onClick={onFullScreen}
                >
                    <Icon name='expand'/>
                </Button>
            </div>
        );
    }
}
