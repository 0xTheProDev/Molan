import ACTIONS from 'constants/actions';

import serviceReducer from './serviceReducer';

describe('Service Reducer', () => {

  it('should provide default state', () => {
    expect(
      serviceReducer()
    ).toEqual({});
  });

  it('should provide "status = true" if service available', () => {
    const actionData = {
      type: ACTIONS.GET_STATUS,
    };
    expect(
      serviceReducer({}, actionData)
    ).toEqual({ status: true });
  });

  it('should provide "status = false" if service unavailable', () => {
    const actionData = {
      type: ACTIONS.GET_STATUS,
      error: {},
    };
    expect(
      serviceReducer({}, actionData)
    ).toEqual({ status: false });
  });
});
