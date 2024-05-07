
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userApi from './userApi';

function AdminPage() {
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const users = await userApi.getUsers(); // Sử dụng userApi để lấy danh sách người dùng
      setUserList(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Danh sách tài khoản người dùng</h1>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <p>Họ và tên: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Số điện thoại: {user.phone}</p>


            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
