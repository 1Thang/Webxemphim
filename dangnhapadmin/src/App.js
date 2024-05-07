
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userApi from './Api/UserApi.js';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // Thêm state cho tên đăng nhập
  const [isLoginView, setIsLoginView] = useState(true);
  
  // Sử dụng useHistory để chuyển hướng
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      await userApi.handleLogin(userData);
      // Chuyển hướng sau khi đăng nhập thành công
      history.push('/admin');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        console.log('Mật khẩu không trùng khớp');
        return;
      }
      
      const userData = { fullName, email, phone, dob, password, username };
      await userApi.handleRegister(userData);
      // Chuyển hướng sau khi đăng ký thành công
      history.push('/admin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>{isLoginView ? 'Đăng Nhập' : 'Đăng Ký'}</h1>
      {!isLoginView && (
        <div className="input-group">
          <input
            type="text"
            placeholder="Họ và Tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {!isLoginView && (
        <div className="input-group">
          <input
            type="text"
            placeholder="Số Điện Thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      )}
      {!isLoginView && (
        <div className="input-group">
          <input
            type="text"
            placeholder="Ngày Sinh (YYYY-MM-DD)"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {!isLoginView && (
        <div className="input-group">
          <input
            type="password"
            placeholder="Xác Thực Mật Khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}
      <button className="btn" onClick={isLoginView ? handleLogin : handleRegister}>
        {isLoginView ? 'Đăng Nhập' : 'Đăng Ký'}
      </button>
      <p className="toggle-auth" onClick={() => setIsLoginView(!isLoginView)}>
        {isLoginView ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
        <button>{isLoginView ? 'Đăng ký ngay!' : 'Đăng nhập ngay!'}</button>
      </p>
    </div>
  );
}

export default App;
