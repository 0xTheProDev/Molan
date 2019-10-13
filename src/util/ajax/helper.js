// @flow
import * as Utils from 'util/common';

export function serializeData(data: Object): string {
  const serializedData: string[] = [];

  Object.keys(data).forEach((key: string) => {
    const value: string | Object = data[key];

    if (Utils.isEmpty(value)) {
      serializedData.push(`${key}=`);
      return;
    }

    try {
      const serializedValue: string =
        Utils.isPrimitive(value) ?
          encodeURIComponent(value) :
          JSON.stringify(value);

      serializedData.push(`${key}=${serializedValue}`);
    } catch(err) {
      /** Push Empty key if Invalid Payload Found */
      /* istanbul ignore next */
      serializedData.push(`${key}=`);
    }
  });

  return serializedData.join('&');
}
