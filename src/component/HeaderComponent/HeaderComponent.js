// @flow
import React from 'react';
import { Image } from 'semantic-ui-react';
import Clock from 'react-live-clock';

import Logo from 'assets/molan_logo.png';

import Styles from './HeaderComponent.module.css';

export function HeaderComponent() {
  return (
    <div className={Styles['header-content']}>
      <div className={Styles['brand']} role="banner">
        <Image src={Logo} size="small" alt="Molan iDE" />
      </div>
      <div className={Styles['clock-area']}>
        <i aria-hidden="true" className="clock outline icon" />
        <Clock ticking format={"hh:mm:ssa"} />
      </div>
    </div>
  );
}
