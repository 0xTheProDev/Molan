import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header-content'>
                <Segment basic>
                    Header
                </Segment>
            </div>
        );
    }
}