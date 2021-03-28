import { SET_ERROR, RESET_ERROR } from '../../constants';

const error = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return null;
    default:
      return state;
  }
};

export default error;
