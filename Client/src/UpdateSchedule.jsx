import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

export default function UpdateSchedule(){
    const [task, setTask] = useState()
    const navigate = useNavigate()
    const{ id }= useParams()


    useEffect(() => {
        axios.get('http://localhost:3000/tasks/'+id)
            .then(response => {
                // Assuming response.data is an array of tasks
                console.log(response)
                setTask(response.data.task)
            })
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);
    
    const Submit =(e)=>{
        e.preventDefault()
        navigate('/')
        axios.put('http://localhost:3000/updateTask/'+id,{task})
        .then(result =>{
            console.log(result)
        })
        .catch(err=> console.log(err))
    }
    return(
        <div id='form-container'>
            
            <form onSubmit={Submit}>
                <label >Update task</label>
                <input type="text"  placeholder='Add your tasks.....' value={task} onChange={(e)=> setTask(e.target.value)}/>
                <input type="submit" value="Update" id='update' />
            </form>
        </div>
    )
}