import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ShowTasks from './components/tasks/ShowTasks';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import LoginComponent from './components/LoginComponent';
import { useEffect, useState } from 'react';
import { login } from './services/authService';


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const handleLogin = async (credentials) => {
    try {
      const token = await login(credentials);
      setToken(token);
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ !token  ? <LoginComponent onLogin={handleLogin}/> : <Navigate to='/tasks'/> }/>
          <Route path="/tasks" element={token ? <ShowTasks token={token} /> : <Navigate to="/" />} />
          <Route path='/create' element={ token ? <CreateTask token={token}/> : <Navigate to='/' />}/>
          <Route path='/edit/:id' element={ token ? <EditTask token={token}/> : <Navigate to='/' /> }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
