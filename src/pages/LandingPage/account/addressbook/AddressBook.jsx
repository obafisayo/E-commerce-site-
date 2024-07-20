import React, { useState } from 'react';

const AddressBook = ({user}) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      address: user.address
    },
  ]);

  const [editingContactId, setEditingContactId] = useState(null);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const handleEditContact = (contactId) => {
    setEditingContactId(contactId);
    const contact = contacts.find((c) => c.id === contactId);
    setNewFirstName(contact.firstname);
    setNewLastName(contact.lastname);
    setNewEmail(contact.email);
    setNewAddress(contact.address);
  };

  const handleSaveContact = (contactId) => {
    setContacts(contacts.map((contact) => {
      if (contact.id === contactId) {
        return {
          ...contact,
          firstname: newFirstName,
          lastname: newLastName,
          email: newEmail,
          address: newAddress
        };
      }
      return contact;
    }));
    setEditingContactId(null);
  };

  const handleAddContact = () => {
    const newContact = {
      id: contacts.length + 1,
      firstname: newFirstName,
      lastname: newLastName,
      email: newEmail,
      address: newAddress
    };
    setContacts([...contacts, newContact]);
    setNewFirstName('');
    setNewLastName('');
    setNewEmail('');
    setNewAddress('');
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  return (
    <div className="space-y-4 mt-10">
      {contacts.map((contact) => (
        <div key={contact.id} className="flex gap-2 p-4 space-x-4 shadow-md relative">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-600">{getInitials(contact.firstname, contact.lastname)}</span>
          </div>
          {editingContactId === contact.id ? (
            <div className="flex-1">
              <input
                type="text"
                className="border-gray-300 rounded-md px-3 py-2 w-full"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <input
                type="text"
                className="border-gray-300 rounded-md px-3 py-2 w-full mt-2"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <input
                type="email"
                className="border-gray-300 rounded-md px-3 py-2 w-full mt-2"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input
                type="text"
                className="border-gray-300 rounded-md px-3 py-2 w-full mt-2"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <button
                  className="bg-brandRed text-white rounded-md px-3 py-2 mr-2"
                  onClick={() => handleSaveContact(contact.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-600 rounded-md px-3 py-2"
                  onClick={() => setEditingContactId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <h3 className="text-lg font-medium">{contact.firstname} {contact.lastname}</h3>
              <p className="text-gray-500">{contact.email}</p>
              <p className="text-gray-500">{contact.address}</p>
              <div className="flex justify-end">
                <button
                  className="bg-brandRed text-white rounded-md px-3 py-2 mt-2 mr-2"
                  onClick={() => handleEditContact(contact.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => handleDeleteContact(contact.id)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ))}
        <div className="flex gap-2 flex-wrap">
            <input
            type="text"
            className="border-gray-300 rounded-md px-3 py-2 flex-1"
            placeholder="First Name"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
            type="text"
            className="border-gray-300 rounded-md px-3 py-2 flex-1"
            placeholder="Last Name"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            />
            <input
            type="email"
            className="border-gray-300 rounded-md px-3 py-2 flex-1"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            />
            <input
            type="text"
            className="border-gray-300 rounded-md px-3 py-2 flex-1"
            placeholder="Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            />
            <button
            className="bg-brandRed text-white rounded-md px-3 py-2"
            onClick={handleAddContact}
            >
            Add
            </button>
        </div>
    </div>
  );
};

export default AddressBook;
