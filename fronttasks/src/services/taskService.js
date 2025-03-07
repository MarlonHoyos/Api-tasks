import axios from 'axios';

export const getTasks = async (token) => {
  try {
    const response = await axios.get('http://localhost:8000/api/tasks', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};

export const getTaskId = async (id, token) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      }
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch task');
  }
};


export const deleteTask = async (id, token) => {
  try {
    await axios.delete(`http://localhost:8000/api/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      }
    });
    return true; 
  } catch (error) {
    throw new Error('Failed to delete task'); 
  }
};

export const createTask = async (task, token) => {
  try {
    console.log("token", token); 
    const response = await axios.post('http://localhost:8000/api/tasks', task, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json', 
      }
    });
    return true;
  } catch (error) {
    throw new Error('Failed to create task');
  }
};

export const updateTask = async (id, task, token) => {
  try {
    const response = await axios.put(`http://localhost:8000/api/tasks/${id}`, task, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json', 
      }
    });
    return response.data.data; 
  } catch (error) {
    throw new Error('Failed to update task');
  }
};