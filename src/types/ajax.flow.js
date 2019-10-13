// @flow
export type AjaxParams = {
  url: string,
  method: string,
  data?: Object,
  headers?: {
    [key: string]: string,
  },
};
