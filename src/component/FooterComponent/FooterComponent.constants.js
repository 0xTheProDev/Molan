// @flow
import { SERVICE_STATUS } from 'constants/services';
import { CopyRightHolderItem, ServiceStatus } from './FooterComponent.flow';

export const COPYRIGHT_HOLDERS: Array<CopyRightHolderItem> = Object.freeze([
  {
    title: 'Bytes Club',
    url: 'https://github.com/BytesClub',
  },
  {
    title: 'Progyan Bhattacharya',
    url: 'https://progyan1997.github.io',
  }
]);


const SERVICE_STATUS_LOADING: ServiceStatus = Object.freeze({
  icon: 'question',
  color: 'yellow',
  label: 'Loading',
});

const SERVICE_STATUS_READY: ServiceStatus = Object.freeze({
  icon: 'check',
  color: 'green',
  label: 'Ok',
});

const SERVICE_STATUS_ERROR: ServiceStatus = Object.freeze({
  icon: 'close',
  color: 'red',
  label: 'Failed',
});

export const SERVICE_STATUS_OPTIONS = Object.freeze({
  LOADING: SERVICE_STATUS_LOADING,
  READY: SERVICE_STATUS_READY,
  ERROR: SERVICE_STATUS_ERROR,
});

export const SERVICE_STATUS_MAPPING = Object.freeze({
  [SERVICE_STATUS.LOADING]: SERVICE_STATUS_LOADING,
  [SERVICE_STATUS.READY]: SERVICE_STATUS_READY,
  [SERVICE_STATUS.ERROR]: SERVICE_STATUS_ERROR,
});
