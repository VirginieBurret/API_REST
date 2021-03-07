export const REGISTER = 'REGISTER';
export const TRY_TO_LOGIN = 'TRY_TO_LOGIN';
export const LOG_IN = 'LOG_IN';

export const logIn = (userData) => ({
  type: LOG_IN,
  data: userData,
});


