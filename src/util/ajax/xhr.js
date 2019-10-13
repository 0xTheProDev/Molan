// @flow
import * as Utils from 'util/common';
import { serializeData } from './helper';

import {
  ALLOWED_METHODS,
  METHODS,
  METHOD_NOT_ALLOWED,
} from 'constants/ajax';

import { AjaxParams } from 'types/ajax.flow.js';

export function ajax({
  url,
  method,
  data = null,
  headers = null,
}: AjaxParams): Promise<any> {

  if (!ALLOWED_METHODS.includes(method.toUpperCase())) {
    throw new Error(METHOD_NOT_ALLOWED);
  }

  return new Promise(function(resolve, reject) {
    function errorHandler(event: Event) {
      reject(event);
    }

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function successHandler() {
      resolve(xhr.response);
    });

    xhr.addEventListener('error', errorHandler);
    xhr.addEventListener('abort', errorHandler);

    let
      finalUrl = url,
      finalData = data;

    if (METHODS.GET === method && Utils.isNotNull(data)) {
      const serializedData = serializeData(data);

      finalUrl = `${url}?${serializedData}`;
      finalData = null;
    }

    xhr.open(method, finalUrl, true);
    
    if (headers) {
      Object.keys(headers).forEach((key: string) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    xhr.send(finalData);
  });
}
