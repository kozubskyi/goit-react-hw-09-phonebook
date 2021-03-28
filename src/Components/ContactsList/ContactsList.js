//* HOOKS

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Components
import ContactsItem from './ContactsItem/ContactsItem';
// Operations
import { fetchContacts } from '../../redux-toolkit/contacts/contactsOperations';
// Selectors
import * as contactsSelectors from '../../redux-toolkit/contacts/contactsSelectors';

const ContactsList = () => {
  const loading = useSelector(state => contactsSelectors.getLoading(state));
  const sortedFilteredItems = useSelector(state => contactsSelectors.getSortedFilteredItems(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className="contacts__list">
        {sortedFilteredItems.map(contact => (
          <ContactsItem contact={contact} key={contact.id} />
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </>
  );
};

// ContactsList.defaultProps = {
//   items: [],
//   filter: '',
// };

// ContactsList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ),
//   filter: PropTypes.string,
//   onContactDelete: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
export default ContactsList;

//* CLASS

// import { Component } from 'react';
// import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';
// // Operations
// import { fetchContacts } from '../../redux-toolkit/contacts/contactsOperations';
// // Components
// import ContactsItem from './ContactsItem/ContactsItem';

// class ContactsList extends Component {
//   componentDidMount() {
//     this.props.onFetchContacts();
//   }

//   render() {
//     const { items, filter, loading } = this.props;

//     return (
//       <>
//         <ul className="contacts__list">
//           {items
//             .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
//             .map(contact => (
//               <ContactsItem contact={contact} key={contact.id} />
//             ))}
//         </ul>
//         {loading && <p>Loading...</p>}
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   items: state.contacts.items,
//   filter: state.contacts.filter,
//   loading: state.contacts.loading,
// });

// const mapDispatchToProps = dispatch => ({
//   onFetchContacts: () => dispatch(fetchContacts()),
// });

// // ContactsList.defaultProps = {
// //   items: [],
// //   filter: '',
// // };

// // ContactsList.propTypes = {
// //   items: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.string.isRequired,
// //       name: PropTypes.string.isRequired,
// //       number: PropTypes.string.isRequired,
// //     }).isRequired,
// //   ),
// //   filter: PropTypes.string,
// //   onContactDelete: PropTypes.func.isRequired,
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
