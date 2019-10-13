// @flow
import React from 'react';
import { Button, Grid, Icon, Segment } from 'semantic-ui-react';
import { noop } from 'util/common';

import { FooterComponentInternalProps } from './FooterComponent.flow';
import { COPYRIGHT_HOLDERS, SERVICE_STATUS_OPTIONS } from './FooterComponent.constants';
import Styles from './FooterComponent.module.css';

export function CopyRightSection({ CopyRightTitleText, CopyRightHolders }: FooterComponentInternalProps) {
  return (
    <div className={Styles['copyright']} role="contentinfo">
      <Segment basic>
        <i>&copy;</i>
        <span className="lg-only">{CopyRightTitleText}</span>
        {
          CopyRightHolders.map((copyRightHolder) =>
            <a key={copyRightHolder.url} href={copyRightHolder.url} target="_blank" rel="noopener noreferrer">
              {copyRightHolder.title}
            </a>
          )
        }
      </Segment>
    </div>
  );
}

export function ServiceStatusSection({ ServiceStatus, ServiceStatusTitleText, reloadServiceStatus }: FooterComponentInternalProps) {
  return (
    <Grid columns={1} centered relaxed>
      <Grid.Column>
        <Segment basic textAlign="center">
          <Button className={Styles['service-status']} onClick={reloadServiceStatus} role="status">
            <Icon
              name={ServiceStatus.icon}
              color={ServiceStatus.color}
              aria-label={ServiceStatus.label}
              aria-hidden={ServiceStatus.label}
            />
            {ServiceStatusTitleText}
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export function FooterComponent(props: FooterComponentInternalProps) {
  return (
    <div className={Styles['footer-content']}>
      <CopyRightSection {...props} />
      <div className={Styles['footer-cols']}>
        <ServiceStatusSection {...props} />
      </div>
    </div>
  );
}

FooterComponent.defaultProps = {
  CopyRightTitleText: 'All rights reserved by',
  CopyRightHolders: COPYRIGHT_HOLDERS,
  ServiceStatusTitleText: 'Service Status',
  ServiceStatus: SERVICE_STATUS_OPTIONS.LOADING,
  reloadServiceStatus: noop,
};
