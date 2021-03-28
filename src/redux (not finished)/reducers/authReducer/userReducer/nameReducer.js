import { CHANGE_USER_NAME } from '../../../constants';

const name = (state = '', action) => {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default name;
