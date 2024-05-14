// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../services/userService';

const UserForm = ({ currentUser, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, email };
    try {
      if (currentUser) {
        await updateUser(currentUser.id, user);
      } else {
        await addUser(user);
      }
      onSave();
    } catch (error) {
      console.error('Error saving user', error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{currentUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currentUser ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
