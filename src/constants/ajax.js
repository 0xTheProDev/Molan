/** Base URL to Runner Application (e.g., `localhost:5001`) */
export const BASE_URL = 'http://localhost:5001/molan-ide/us-central1/default-app';

/** HTTP Methods */
export const METHODS = Object.freeze({
  GET:      'GET',
  POST:     'POST',
  PUT:      'PUT',
  DELETE:   'DELETE',
});

/** Allowed HTTP Methods for Ajax */
export const ALLOWED_METHODS = Object.freeze([
  METHODS.GET,
  METHODS.POST,
]);

/** Error string for Invalid Method */
export const METHOD_NOT_ALLOWED = 'Method not allowed for Ajax Request';
