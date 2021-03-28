import React from 'react';
import { useDispatch } from 'react-redux';
// Styles
import './ContactsItem.scss';
// Actions
import { deleteContact } from '../../../redux-toolkit/contacts/contactsOperations';
// Bootstrap components
import Button from 'react-bootstrap/Button';

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="contacts__item">
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" variant="outline-danger" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
      {/* <button type="button" className="btn" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button> */}
    </li>
  );
};

export default ContactsItem;
