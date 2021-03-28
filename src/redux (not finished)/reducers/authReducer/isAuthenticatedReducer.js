import { CHANGE_USER_AUTH } from '../../constants';

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case CHANGE_USER_AUTH:
      return !state;
    default:
      return state;
  }
};

export default isAuthenticated;
