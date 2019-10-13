// @flow
export const SERVICE_STATUS = Object.freeze({
  LOADING: 0,
  READY: 1,
  ERROR: 2,
});

export const COMPILER_STATUS = Object.freeze({
  INPROGRESS: 0,
  COMPILATION_ERROR: 1,
  RUNTIME_ERROR: 2,
  SUCCESS: 3,
});
