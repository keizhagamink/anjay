'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

  const [gambar, setImage] = useState(false);
  const [data, setData] = useState({
    judul: "",
    deskripsi: "",
    category: "Karbon",
    penulis: "Trailblazers",
    fotopenulis: "/iconfemale.jpeg"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('judul', data.judul);
    formData.append('deskripsi', data.deskripsi);
    formData.append('category', data.category);
    formData.append('penulis', data.penulis);
    formData.append('fotopenulis', data.fotopenulis);
    formData.append('gambar', gambar);
    const response = await axios.post('/api/map', formData);
    if (response.data.success) {
        toast.success(response.data.msg)
    }
    else {
        toast.error("error");
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>
          Upload Thumnail
        </p>
        <label htmlFor="gambar">
          <Image className='mt-4' src={!gambar ? assets.upload_area : URL.createObjectURL(gambar)} width={140} height={70} alt='' />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='gambar' hidden required />
        <p className='text-xl mt-4'>Blog judul</p>
        <input name='judul' onChange={onChangeHandler} value={data.judul} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type Here' required />
        <p className='text-xl mt-4'>Blog deskripsi</p>
        <textarea name='deskripsi' onChange={onChangeHandler} value={data.deskripsi} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Write Content Here..' rows={8} required />
        <p className='text-xl mt-4'>Blog kategori</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Karbon">Karbon</option>
          <option value="Mangrove">Mangrove</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
      </form>
    </>

  )
}

export default Page
