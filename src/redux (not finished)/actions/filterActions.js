import { CHANGE_FILTER } from '../constants';

const changeFilter = text => ({
  type: CHANGE_FILTER,
  payload: text,
});

export default changeFilter;
