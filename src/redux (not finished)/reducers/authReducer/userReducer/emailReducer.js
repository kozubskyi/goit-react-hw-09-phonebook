import { CHANGE_USER_EMAIL } from '../../../constants';

const email = (state = '', action) => {
  switch (action.type) {
    case CHANGE_USER_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

export default email;
