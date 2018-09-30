export const APP_TITLE = 'Sign in';
export const AUTH_ERR_MSG = 'Username or password is not correct.';
export const FIELD_EMPTY = 'This field is required';
export const SMALL_SCREEN_SIZE = 768;
export const SMALL_SCREEN_MEDIA = `screen and (max-width: ${SMALL_SCREEN_SIZE}px)`;

// if prod use current web hostname
// if dev use our devServer proxy config
const hostnameArray = window.location.href.split('/');
const hostname = `${hostnameArray[0]}//${hostnameArray[2]}/${hostnameArray[3]}/`;
export const API_HOST = process.env.NODE_ENV === 'production'
  ? hostname
  : '/api/';
