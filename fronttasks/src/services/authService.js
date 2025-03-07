import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.data.status && response.data.data && response.data.data.token) {
      return response.data.data.token; 
    } else {
      throw new Error('Login failed'); 
    }
  } catch (error) {
    throw new Error('Login failed: ' + error.message); 
  }
};
