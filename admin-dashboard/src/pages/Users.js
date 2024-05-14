import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { getUsers, addUser, updateUser, deleteUser } from '../services/userService';
const Users = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setEditingUser(null);
    setRefresh(!refresh);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <UserForm
        currentUser={editingUser}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <UserList onEditUser={handleEditUser} key={refresh} />
    </div>
  );
};

export default Users;
