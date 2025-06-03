import React from 'react';
import bngimg from "../../../public/banner-img-1.png";

const Banner = () => {
    return (
        <div className='text-center border-amber-50 border-4 my-2 md:my-4 lg:my-6 shadow-lg rounded-xl p-4 md:p-6 lg:p-8 max-w-7xl mx-auto'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800'>
                Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className='text-sm sm:text-base md:text-lg mb-6 text-gray-600 px-2 sm:px-4 md:px-0'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mb-6'>
                <input 
                    className='bg-white rounded-full w-full sm:w-1/2 md:w-1/3 p-2 md:p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    type="text" 
                    placeholder='Search any doctor..'
                />
                <button className='bg-[#176AE5] hover:bg-[#1458C5] rounded-full text-white px-4 py-2 md:px-6 md:py-3 transition-colors w-full sm:w-auto'>
                    Search Now
                </button>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <img src={bngimg} alt="Medical professionals" className='w-full sm:w-1/2 md:w-auto max-w-md' />
                <img src={bngimg} alt="Medical professionals" className='w-full sm:w-1/2 md:w-auto max-w-md' />
            </div>
        </div>
    );
};

export default Banner;