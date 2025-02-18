import React, { useState } from 'react'
import '../styles/RegisterPage.scss'
import { Link } from 'react-router-dom'


const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация:", { username, password });
    // Здесь будет отправка на сервер
  };

  return (
    <div className="register-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Зарегистрироваться</button>
        <div className="login-container">
          <h5>Или </h5>
          <Link to="/login">
            <button>Логин</button>
          </Link>
          <h5>если вы уже зарестрированы</h5>
        </div>
      </form>
    </div>
  );
}


export default RegisterPage