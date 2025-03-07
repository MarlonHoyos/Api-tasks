import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorModal from '../ErrorModals'
import { getTaskId, updateTask } from '../../services/taskService'

const endponint = 'http://localhost:8000/api/tasks/'

const EditTask = ({token}) => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        try {
            e.preventDefault()
            await updateTask(id, {
                title: title,
                description: description,
                status:status
            }, token)
            navigate('/') 
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
      const getTaskByid = async () => {
        const response = await getTaskId(id, token)
        setTitle(response.title)
        setDescription(response.description)
        setStatus(response.status)
      }
      getTaskByid()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div>
        <h3>Edit Task</h3>
        <ErrorModal error={error} onClose={() => setError('')}/>
        <form onSubmit={update}>
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
                <input
                    value={status}
                    onChange={ (e) => setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default EditTask
