import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess('');
      return;
    }

    if (!agree) {
      setError('You must agree to terms and conditions');
      setSuccess('');
      return;
    }

    // Simulate success
    setError('');
    setSuccess(`Welcome, ${username}! Your account has been created.`);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgree(false);
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Sign Up</h1>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="password">
            <label>
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <span className="rem">I agree to the terms & conditions</span>
            </label>
          </div>

          <button type="submit" className="submit">Sign Up</button>
        </form>

        <div className="register">
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
