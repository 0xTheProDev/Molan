// @flow
import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './molan.png';
import Styles from './index.module.css';

function HeaderComponent() {
  return (
    <div className={Styles['header-content']}>
      <div className={Styles['brand']}>
        <Image src={logo} size="small" />
      </div>
    </div>
  );
}

export default HeaderComponent;
