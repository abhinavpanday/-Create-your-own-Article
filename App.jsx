import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Navbar from './components/navbar'
import Landing from './pages/Landing'
import CreatePost from './pages/CreatePost'
import SingleBlog from './pages/SingleBlog'
import MyBlogs from './pages/Myblogs'
import UpdatePost from './pages/updatePost'

const App = () => {
  return (
    <Routes>

      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path='/blog/:id' element={<SingleBlog />} />
      <Route path='/myblogs' element={<MyBlogs />} />
      <Route path='/update/:id' element={<UpdatePost />} />

    </Routes>
  )
}

export default App