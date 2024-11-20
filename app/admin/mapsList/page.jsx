'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import MapTabelItems from '@/Components/AdminComponents/MapTabelItems';


const Page = () => {

  const [maps, setMaps] = useState([]);

  const fetchMaps = async () => {
    const response = await axios.get('/api/map');
    setMaps(response.data.maps);
  }

  const deleteMap = async (mongoId) => {
    const response = await axios.delete('/api/map', {
      params: {
        id: mongoId
      }
    })
    toast.success(response.data.msg);
    fetchMaps();
  }

  useEffect(() => {
    fetchMaps()
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 '>
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {maps.map((item, index) => {
              return <MapTabelItems key={index} mongoId={item._id} judul={item.judul} penulis={item.penulis} fotopenulis={item.fotopenulis} tanggal={item.tanggal} deleteMap={deleteMap} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page
