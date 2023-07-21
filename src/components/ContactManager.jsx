import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    handleFilter(filterBy);
  }, [filterBy]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    handleFilter(filterBy); // Actualizar los contactos filtrados
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setFilteredContacts(filteredContacts.filter((contact) => contact.id !== id));
  };

  const handleSort = () => {
    if (sortBy === 'asc') {
      setFilteredContacts([...filteredContacts].sort((a, b) => a.name.localeCompare(b.name)));
      setSortBy('desc');
    } else {
      setFilteredContacts([...filteredContacts].sort((a, b) => b.name.localeCompare(a.name)));
      setSortBy('asc');
    }
  };

  const handleFilter = (type) => {
    setFilterBy(type);
    if (type === 'all') {
      setFilteredContacts([...contacts]);
    } else {
      setFilteredContacts(contacts.filter((contact) => contact.type === type));
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <ContactForm onAddContact={addContact} />
      <div className="btn-group" role="group">
        <button className="btn btn-primary " onClick={handleSort}>
          {sortBy === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
        </button>
        <button className="btn btn-primary" onClick={() => handleFilter('all')}>
          All
        </button>
        <button className="btn btn-primary" onClick={() => handleFilter('person')}>
          Person
        </button>
        <button className="btn btn-primary" onClick={() => handleFilter('company')}>
          Company
        </button>
      </div>
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default ContactManager;
