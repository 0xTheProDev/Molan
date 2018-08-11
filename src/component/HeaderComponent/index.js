import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import logo from './molan.png';
import './index.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header-content'>
                <div className='brand'>
                    <Image src={logo} size='small'/>
                </div>
            </div>
        );
    }
}