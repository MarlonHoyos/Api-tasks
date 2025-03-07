import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorModal from '../ErrorModals'
import { createTask } from '../../services/taskService'

const endponint = 'http://localhost:8000/api/tasks'

const CreateTask = ({token}) => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('pending')
    const [error, setError] = useState('')



    const navigate = useNavigate()

    const tasks = async (e) => {
        try {
            e.preventDefault()
            await createTask( {description: description, title, title, status, status}, token)
            navigate('/tasks') 
        } catch (error) {
            setError(error.message)
        }
        
    }

  return (
    <div>
        <h3>Create Task</h3>
        <ErrorModal error={error} onClose={() => setError('')}/>
        <form onSubmit={tasks}>
            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input
                    value={description}
                    onChange={ (e) => setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='form-control'
                >
                    <option value='pending'>Pending</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
        </form>
    </div>
  )
}

export default CreateTask
