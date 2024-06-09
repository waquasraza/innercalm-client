import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/User/Home/Home'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPassword from './components/Auth/ForgotPassword'
import ResetPassword from './components/Auth/ResetPassword'
import VerifyOtp from './components/Auth/VerifyOtp'


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
      </Routes>
  )
}

export default App