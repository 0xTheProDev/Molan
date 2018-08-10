import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class ButtonGroup extends Component {
    render() {
        return (
            <div>
                <Button animated='fade' floated='right'>
                    <Button.Content hidden>Save</Button.Content>
                    <Button.Content visible>
                        <Icon name='save'/>
                    </Button.Content>
                </Button>
                <Button animated floated='right'>
                    <Button.Content hidden>Reload</Button.Content>
                    <Button.Content visible>
                        <Icon name='redo'/>
                    </Button.Content>
                </Button>
                <Button animated='vertical' floated='right'>
                    <Button.Content hidden>Upload</Button.Content>
                    <Button.Content visible>
                        <Icon name='upload'/>
                    </Button.Content>
                </Button>
            </div>
        );
    }
}