import React, { Component } from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react';
import _img from './text.png';
import './index.css';

export default class LoaderComponent extends Component {
    render() {
        return (
            <div className='loader-container'>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
                <Image src={_img}/>
            </div>
        );
    }
}