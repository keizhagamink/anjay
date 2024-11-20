import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Regist from '@/Components/Regist'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <Regist/>
    <Footer/>
    </>
  )
}

export default page
