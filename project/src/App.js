import React, { useState } from 'react';
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

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log('Mật khẩu không trùng khớp');
      return;
    }

    console.log('Username:', username); // Log tên đăng nhập
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date of Birth:', dob);
    console.log('Password:', password);
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