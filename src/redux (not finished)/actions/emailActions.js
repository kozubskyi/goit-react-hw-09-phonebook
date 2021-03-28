import { CHANGE_USER_EMAIL } from '../constants';

const changeUserEmail = email => ({
  type: CHANGE_USER_EMAIL,
  payload: email,
});

export default changeUserEmail;
