import { useState, useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter'
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(parsedContacts ?? defaultContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };

    setContacts(prevState => [newContact, ...prevState]);

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        deleteContact(newContact.id);
      }
    });
  }
  
  const changeFilter = (event) => {
    setFilter(event.currentTarget.value.trim());
  };

  const deleteContact = (contactID) => {
    setContacts(contacts.filter(contact => contact.id !== contactID));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm onSubmit={addNewContact} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      
      <h2>Contacts</h2>
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </Container>
  );
};