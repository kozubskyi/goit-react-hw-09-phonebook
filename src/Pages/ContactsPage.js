// Components
import AddContactForm from '../Components/AddContactForm/AddContactForm';
import Filter from '../Components/Filter/Filter';
import ContactsList from '../Components/ContactsList/ContactsList';

const ContactsPage = () => {
  return (
    <>
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
