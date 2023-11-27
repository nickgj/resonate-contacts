import React from 'react';
import './ContactList.css';
import './App.css';

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div className='container'>
      <div className='border'>
        {contacts.length > 0 ? (
          // display results, only if there exist valid results
          <ul className="contact-list">
            {contacts.map(contact => (
              <li key={contact.id} className="contact-list-item" onClick={() => onContactClick(contact)}>
                {contact.name}
              </li>
            ))}
          </ul>
        ) : (
          // otherwise display no results
          <div className="no-results-container">
            <p className="no-results">No results found</p>
          </div>
        )}
      </div>
    </div>
  );
};
  
  export default ContactList;
