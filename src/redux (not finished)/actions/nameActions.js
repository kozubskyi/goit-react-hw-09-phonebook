import { CHANGE_USER_NAME } from '../constants';

const changeUserName = name => ({
  type: CHANGE_USER_NAME,
  payload: name,
});

export default changeUserName;
