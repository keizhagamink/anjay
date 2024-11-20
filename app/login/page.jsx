import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Login from '@/Components/Login'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <br />
      <Login/>
      <br />
      <Footer/>
    </div>
  )
}

export default page
