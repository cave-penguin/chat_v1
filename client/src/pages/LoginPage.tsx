import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.scss";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Вход</button>
        <div className="register-container">
          <h5>Или </h5>
          <Link to="/register">
            <button>Регистрация</button>
          </Link>
          <h5>если вы ещё не зарестрированы</h5>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
