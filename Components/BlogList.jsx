
import React, { useEffect, useState } from 'react'
import Blogitem from './Blogitem'
import axios from 'axios';

function Bloglist() {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (

        <div>
            <div className="py-5 px-5 md:px-12 lg:px-28 text-center my-8 ">
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
                <p className='mt-10 mx-w-[740px] m-auto text-xs sm:text-base'>Latest articles on mangrove conservation, blue carbon, and sustainability, crafted with dedication by the ROVEBOND team.</p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] ' action="">
                    <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none ' />
                    <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>
            <div className="flex justify-center gap-6 my-10 ">
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}> All</button>
                <button onClick={() => setMenu('Techology')} className={menu === "Techology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifesyle')} className={menu === "Lifesyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {blogs.filter((item) => menu === "All" ? true : item.catagory === menu).map((item, index) => {
                    return <Blogitem key={index} id={item._id} image={item.image} title={item.title} description={item.description} catagory={item.catagory} />
                })}
            </div>
        </div>
    )
}

export default Bloglist