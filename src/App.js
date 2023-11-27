import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactSearch from './ContactSearch'; // Import the new component

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // get dummy data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  });

  // select a contact to view details
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  // update search results
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // filter contacts by search term matching username or name
  const filteredContacts = contacts.filter(contact => {
    const nameMatch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const nicknameMatch = contact.username.toLowerCase().includes(searchTerm.toLowerCase());

    return nameMatch || nicknameMatch;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h2>Contacts Browser</h2>
        <ContactSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </header>
      <div className="content">
        <div className="list-container">
          <ContactList contacts={filteredContacts} onContactClick={handleContactClick} />
        </div>
        <div className="details-container">
          <ContactDetails contact={selectedContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
