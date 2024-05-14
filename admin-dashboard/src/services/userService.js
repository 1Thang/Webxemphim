// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Hàm lấy danh sách người dùng từ API
const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Hàm thêm người dùng mới vào API
const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

// Hàm cập nhật thông tin người dùng trong API
const updateUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

// Hàm xóa người dùng từ API
const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// Export các hàm để sử dụng trong các component khác
export { getUsers, addUser, updateUser, deleteUser };
