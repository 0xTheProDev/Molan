// @flow
import React from 'react';

import { FooterComponentProps } from './FooterComponent.flow';
import { FooterComponent } from './FooterComponent';
import { SERVICE_STATUS_MAPPING } from './FooterComponent.constants';

export default function FooterComponentFactory({ ServiceStatus, reloadServiceStatus }: FooterComponentProps) {
  const ServiceStatusOption = SERVICE_STATUS_MAPPING[ServiceStatus];

  return (
    <FooterComponent
      ServiceStatus={ServiceStatusOption}
      reloadServiceStatus={reloadServiceStatus}
    />
  );
}

export { FooterComponentProps, FooterComponentFactory as FooterComponent };
