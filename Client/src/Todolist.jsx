import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Make sure to import Link

import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/tasks')
            .then(response => {
                // Assuming response.data is an array of tasks
                setTasks(response.data);
            })
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);
    
    const handleDelete = (id)=>{
        axios.delete('http://localhost:3000/deleteTask/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
    const handleUpdate = ()=>{
        <Link to = '/UpdateTask' ></Link>
        // Navigate('/UpdateTask')
    }

    return (
        <>
            <h2>ToDo APP</h2>
            <h3>Welcome... <br />List Your schedules</h3>
            <div className='todo-lists'>
                <Link to='/AddTask' className='btn btn-success' id='addTask'> Add Tasks</Link>
                <ul>
                <ul>
                    {tasks.map(task => (
                        < li key={task._id} > < button onClick={(e)=> handleDelete(task._id)}><FontAwesomeIcon icon={faTrashCan} /></button> <Link to={`/UpdateTask/${task._id}`} id='link-style' >
                             
                            {task.task || 'No task name'} {/* Handle undefined task names */}
                            </Link>
                        </li>
                    ))}
                </ul>

                </ul>
            </div>
        </>
    );
}
