//* HOOKS

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import './AddContactForm.scss';
// Operations
import { addContact } from '../../redux-toolkit/contacts/contactsOperations';
// Selectors
import { getItems } from '../../redux-toolkit/contacts/contactsSelectors';
// Bootstrap components
import Button from 'react-bootstrap/Button';

const AddContactForm = () => {
  // state
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // store
  const items = useSelector(state => getItems(state));
  const dispatch = useDispatch();

  const changeName = event => setName(event.target.value);
  const changeNumber = event => setNumber(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    const names = items.map(contact => contact.name);
    const contact = { name, number };
    names.includes(name) ? alert(`${name} is already in contacts.`) : dispatch(addContact(contact));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Phonebook__form" onSubmit={onFormSubmit}>
      <label htmlFor="Phonebook-form__name">Name</label>
      <input
        type="text"
        id="Phonebook-form__name"
        name="name"
        value={name}
        onChange={changeName}
        required
        autoComplete="off"
      ></input>
      <label htmlFor="Phonebook-form__number">Number</label>
      <input
        type="tel"
        id="Phonebook-form__number"
        name="number"
        value={number}
        onChange={changeNumber}
        required
        autoComplete="off"
        pattern="^[ 0-9]+$"
      ></input>
      <Button type="submit" variant="primary">
        Bootstrap
      </Button>
      {/* <button className="btn" type="submit">
        Add contact
      </button> */}
    </form>
  );
};

export default AddContactForm;

//*===============================================================================

//* CLASS

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// // Styles
// import './AddContactForm.scss';
// // Actions
// import { addContact } from '../../redux/actions/contactsActions';

// let myId = 0; //! test

// class AddContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   changeInputValue = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   onFormSubmit = event => {
//     event.preventDefault();
//     const names = this.props.contactsItems.map(contact => contact.name);
//     myId += 1; //! test
//     const contact = { name: this.state.name, number: this.state.number, myId };
//     names.includes(this.state.name)
//       ? alert(`${this.state.name} is already in contacts.`)
//       : this.props.addContact(contact);
//     this.formReset();
//   };

//   formReset = () => this.setState({ name: '', number: '' });

//   render() {
//     return (
//       <form className="Phonebook__form" onSubmit={this.onFormSubmit}>
//         <label htmlFor="Phonebook-form__name">Name</label>
//         <input
//           type="text"
//           id="Phonebook-form__name"
//           name="name"
//           value={this.state.name}
//           onChange={this.changeInputValue}
//           required
//           autoComplete="off"
//         ></input>
//         <label htmlFor="Phonebook-form__number">Number</label>
//         <input
//           type="tel"
//           id="Phonebook-form__number"
//           name="number"
//           value={this.state.number}
//           onChange={this.changeInputValue}
//           required
//           autoComplete="off"
//           pattern="^[ 0-9]+$"
//         ></input>
//         <button className="btn" type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contactsItems: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => dispatch(addContact(contact)),
// });

// AddContactForm.defaultProps = {
//   contactsItems: [],
// };

// AddContactForm.propTypes = {
//   contactsItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ),
//   addContact: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
