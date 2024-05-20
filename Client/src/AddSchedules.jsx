import { useState } from 'react'
import './App.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

export default function AddSchedules(){
    const [task, setTask] = useState()
    const navigate = useNavigate()
    const Submit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/AddTask',{task})
        .then(result =>{
            console.log(result)
            navigate('/')
        })
        .catch(err=> console.log(err))
    }
    return(
        <div id='form-container'>
            
            <form onSubmit={Submit}>
                <label >Add a task</label>
                <input type="text"  placeholder='Add your tasks.....' onChange={(e)=> setTask(e.target.value)}/>
            
                <button type="submit" id='submit'> <FontAwesomeIcon icon={faCirclePlus} /></button>
            </form>
        </div>
    )
}