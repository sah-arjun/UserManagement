import { API_HOST } from './settings';

/**
 * fetchToJSON
 *
 * Extracts Json body from returned response object.
 *
 * @param {str}         url - any valid URL
 * @return {Promise}    resolved Promise with Json data as the value
 *
 */

export const fetchToJSON = (url, options) => {
  fetch(url, options).then(response => response.json());
};

/**
 * RequestAuth
 *
 * It sends request to server via fetch to access/discard resources.
 *
 * @param {str}     username to access server
 * @param {str}     password to access server
 *
 */

export const RequestAuth = (username, password) => {
  const options = {
    method: 'GET',
    headers: { Authorization: `Basic ${window.btoa(`${username}:${password}`)}` },
  };

  return fetchToJSON(`${API_HOST}settings`, options);
};
