import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Mapitem from './Mapitem';

function MapList() {
    const [menu, setMenu] = useState("All");
    const [maps, setMaps] = useState([]);

    const fetchMaps = async () => {
        const response = await axios.get('/api/map');
        setMaps(response.data.maps);
        console.log(response.data.maps);
    }

    useEffect(() => {
        fetchMaps();
    }, [])
    return (
        <div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {maps.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                    return <Mapitem key={index} id={item._id} gambar={item.gambar} judul={item.judul} deskripsi={item.deskripsi} />
                })}
            </div>
        </div>
    )
}

export default MapList
