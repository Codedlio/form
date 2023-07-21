import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, phone, description, type } = contact;

  return (
    <div className="card mb-6">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Phone: {phone}</p>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Type: {type === 'person' ? 'Person' : 'Company'}</p>
        <button onClick={() => onDeleteContact(id)} className="btn btn-outline-primary">Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;