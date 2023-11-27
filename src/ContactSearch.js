import React from 'react';
import './ContactSearch.css';

const ContactSearch = ({ searchTerm, onSearchChange, onClearClick }) => {
  return (
    <div className="container">
      <div className="border">
        <div className="search">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={onSearchChange}
            className='search-input'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSearch;
