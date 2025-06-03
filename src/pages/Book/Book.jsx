import React from 'react';
import { Link } from 'react-router';

const Book = () => {
    return (
        <div className='text-center px-4 py-8 md:py-12 lg:py-16 max-w-4xl mx-auto'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800'>
                You have not booked any appointment yet.
            </h1>
            <p className='text-base sm:text-lg md:text-xl font-medium mb-6 md:mb-8 text-gray-600'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience
            </p>
            <Link to='/'>
                <button className='btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm sm:text-base md:text-lg transition-colors'>
                    Book an appointment
                </button>
            </Link>
        </div>
    );
};

export default Book;