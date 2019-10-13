import { serializeData } from './helper';

describe('Util::Ajax:serializeData', () => {
  it('should convert JSON to urlencoded formdata', () => {
    const
      inputData = {
        a: 1,
        b: 3,
        c: 4,
      },
      outputData = 'a=1&b=3&c=4';

    expect(
      serializeData(inputData)
    ).toEqual(outputData);
  });

  it('should convert nested JSON to urlencoded formdata', () => {
    const
      inputData = {
        a: 1,
        b: {
          c: 4,
          d: 5,
        },
        e: 4,
      },
      outputData = 'a=1&b={"c":4,"d":5}&e=4';

    expect(
      serializeData(inputData)
    ).toEqual(outputData);
  });

  it('should produce empty key if value not given', () => {
    const
      inputData = {
        a: 1,
        b: undefined,
        c: 4,
      },
      outputData = 'a=1&b=&c=4';

    expect(
      serializeData(inputData)
    ).toEqual(outputData);
  });

  it('should produce empty key if value is null', () => {
    const
      inputData = {
        a: 1,
        b: 4,
        c: null,
      },
      outputData = 'a=1&b=4&c=';

    expect(
      serializeData(inputData)
    ).toEqual(outputData);
  });
});
