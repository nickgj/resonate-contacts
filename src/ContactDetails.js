import React from 'react';
import './ContactDetails.css';
import './App.css';

const ContactDetails = ({ contact }) => {
  return (
    <div className='container'>
      <div className='border'>
        {contact ? (
          // display contact, only if selected
          <div className="contact-details">
            <h3>{contact.name}</h3>
            <p><strong>Username:</strong> {contact.username}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Website:</strong> {contact.website}</p>
            <p><strong>Address:</strong> {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
            <h3>@ {contact.company.name}</h3>
            <p><strong>Catch Phrase:</strong> {contact.company.catchPhrase}</p>
            <p><strong>BS:</strong> {contact.company.bs}</p>
          </div>
        ) : (
          // otherwise display empty
          <p className="select-message">No contact selected</p>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;