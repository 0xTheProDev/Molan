// @flow
export type FooterComponentProps = {
  ServiceStatus: number,
  reloadServiceStatus: () => void,
};

export type CopyRightHolderItem = {
  title: string,
  url: string,
};

export type ServiceStatus = {
  icon: string,
  color: string,
  label: string,
};

export type FooterComponentInternalProps = {
  CopyRightTitleText: string,
  CopyRightHolders: Array<CopyRightHolderItem>,
  ServiceStatusTitleText: string,
  ServiceStatus: ServiceStatus,
  reloadServiceStatus: () => void,
};
