import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'


const MapTabelItems = ({fotopenulis,judul,penulis,tanggal,deleteMap,mongoId}) => {
    const MapDate = new Date(tanggal)
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={fotopenulis?fotopenulis:assets.profile_icon}/>
            <p>{penulis?penulis:"No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {judul?judul:"no title"}
        </td>
        <td className='px-6 py-4'>
            {MapDate.toDateString()}
        </td>
        <td onClick={()=>deleteMap(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default MapTabelItems
