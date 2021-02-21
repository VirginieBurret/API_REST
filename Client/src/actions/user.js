export const REGISTER = 'REGISTER';
export const LOG_IN = 'LOG_IN';

export const logIn = (userData) => ({
  type: LOG_IN,
  data: userData,
});
