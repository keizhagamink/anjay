'use client'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import MapList from '@/Components/MapList'

const page = () => {
    return (
        <>
            <Header />
            <div className='py-5 px-5 md:px-12 lg:px-28 my-8'>

                <div className="py-5 px-5 md:px-12 lg:px-28 text-center my-8 ">
                    <h1 className='text-3xl sm:text-5xl font-medium'>Carbon Stock Maps</h1>
                    <p className='mt-5 mx-w-[740px] m-auto text-xs sm:text-base'>Discover the power of data with ROVEBOND's interactive carbon stock maps. These maps provide valuable insights into the blue carbon reserves of mangrove ecosystems, helping to track their role in climate change mitigation. With accurate and up-to-date information, we empower researchers, policymakers, and communities to make informed decisions for sustainable mangrove conservation.</p>
                </div>
                <div className='flex justify-center gap-6 my-10'>

                </div>
            </div>
            <MapList/>
            <Footer />
        </>
    )
}

export default page
