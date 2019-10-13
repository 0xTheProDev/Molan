import ACTIONS from 'constants/actions';

import submitReducer from './submitReducer';

describe('Submit Reducer', () => {

  it('should provide default state', () => {
    expect(
      submitReducer()
    ).toEqual({});
  });

  it('should return data if available in response', () => {
    const DATA = {
      status: 200,
      input: '1',
      output: 'One',
    };
    const actionData = {
      type: ACTIONS.SUBMIT_CODE,
      payload: {
        data: DATA,
      }
    };
    expect(
      submitReducer({}, actionData)
    ).toEqual(DATA);
  });

  it('should return error if failed request', () => {
    const actionData = {
      type: ACTIONS.SUBMIT_CODE,
      error: {},
      payload: {
        status: 404,
      }
    };
    expect(
      submitReducer({}, actionData)
    ).toEqual({ status: 'Submission Failed' });
  });
});
