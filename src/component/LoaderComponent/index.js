// @flow
import React from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react';
import _img from './text.png';
import Styles from './index.module.css';

function LoaderComponent() {
  return (
    <div className={Styles['loader-container']}>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
      <Image src={_img} />
    </div>
  );
}

export default LoaderComponent;
