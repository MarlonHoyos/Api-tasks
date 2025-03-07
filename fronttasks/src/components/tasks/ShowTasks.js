import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'
import { deleteTask, getTasks } from '../../services/taskService'

const endpoint = 'http://localhost:8000/api'
const ShowTasks = ({token}) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks()
    }, [])
    

    const getAllTasks =  async () => {
        const response = await getTasks(token)
        setTasks(response)
    }

    const deleteTasks = async (id) => {
        await deleteTask(id, token)
        getAllTasks()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primey text-while'>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>

                </tr>

            </thead>
            <tbody>
                { tasks.map( (task) => (
                    <tr key={task.id}>
                        <td> {task.title} </td>
                        <td> {task.description} </td>
                        <td> {task.status} </td>
                        <td>
                            <Link to={`/edit/${task.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ () => deleteTasks(task.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowTasks
