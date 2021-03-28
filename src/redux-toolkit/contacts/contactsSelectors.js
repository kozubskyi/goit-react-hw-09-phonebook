import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

export const getSortedFilteredItems = createSelector([getItems, getFilter], (items, filter) => {
  const names = items.map(item => item.name.toLowerCase());
  names.sort();
  // eslint-disable-next-line
  const sortedItems = names.map(name => {
    for (let item of items) {
      if (name === item.name.toLowerCase()) {
        // console.log(item);
        return item;
      }
    }
  });
  return sortedItems.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});
