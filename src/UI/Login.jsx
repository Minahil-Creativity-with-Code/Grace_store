import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State hooks for inputs and messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }

    // Simulate successful login
    setError('');
    setSuccess(`Welcome, ${username}!`);

    // Clear form
    setUsername('');
    setPassword('');
    setRemember(false);
  };

 return (
  <div className="login-page">
    <div className="container">
      <h1>Login</h1>

      {/* Message area */}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="password">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span className="rem">Remember Me</span>
          </label>
          <a href="/">Forgot Password?</a>
        </div>

        <Link to='/admin'>
          <button type="submit" className="submit">Login</button>
        </Link>
      </form>

      <div className="register">
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </div>
    </div>
  </div>
);
};

export default Login;
