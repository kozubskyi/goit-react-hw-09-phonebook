import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from '../../constants';

const items = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]; // payload - обьект нового контакта
    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload); // payload - id контакта, который надо удалить
    case SET_CONTACTS:
      return action.payload; // payload - массив контактов с бекенда
    default:
      return state;
  }
};

export default items;
