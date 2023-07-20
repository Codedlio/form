import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, phone, description, type } = contact;

  return (
    <li className="contact-item">
      <h2 className="contact-name">{name}</h2>
      <p className="contact-info">Phone: {phone}</p>
      <p className="contact-info">Description: {description}</p>
      <p className="contact-info">Type: {type === 'person' ? 'Person' : 'Company'}</p>
      <button onClick={() => onDeleteContact(id)} className="delete-button">Delete</button>
    </li>
  );
};

export default ContactItem;