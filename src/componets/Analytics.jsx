import React from "react";
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2"> 
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
            <div className='flex flex-col justify-centerr'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Data analytics is important because it helps businesses optimize their performances.
                     Implementing it into the business model means companies can help reduce costs
                     by identifying more efficient ways of doing business and by storing large amounts of data.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
            
            </div>
        </div>

    )
}

export default Analytics;