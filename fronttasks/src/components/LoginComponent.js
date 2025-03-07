import React, { useState } from 'react';
import ErrorModal from './ErrorModals';

function LoginComponent({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin({ username, password });
      setError(''); // Clear any previous error
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <ErrorModal error={error} onClose={() => setError('')}/>
        <div className="mb-3">
          <label className='form-label'>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-control'
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'

          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;