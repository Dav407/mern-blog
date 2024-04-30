import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Project from './pages/Project'
import Dashboardd from './pages/Dashboard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/dashboard' element={<Dashboardd/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
