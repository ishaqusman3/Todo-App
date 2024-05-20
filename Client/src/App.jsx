import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'     
import AddSchedules from './AddSchedules'
import UpdateSchedule from './UpdateSchedule'
import './App.css'
import Heading from './Heading'
import Todolist from './Todolist'

function App() {
  return (
    <>
      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Todolist />}></Route>
          <Route path='/AddTask' element={<AddSchedules />}></Route>
          <Route path='/UpdateTask/:id' element={<UpdateSchedule />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
