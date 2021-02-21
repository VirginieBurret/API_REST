import { LOG_IN } from '../actions/user';

const initialState = {
  logged: false,
  register: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true,
        ...action.data,
      };
    default:
      return { ...state };
  }
};

export default user;
