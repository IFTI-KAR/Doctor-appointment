import React from 'react';
import { TbCalendarHeart } from "react-icons/tb";

const Blog = ({question}) => {
    return (
        <div className='bg-white mx-4 my-6 p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold pb-2 mb-3 border-b border-dashed border-gray-200'>
                {question.question}
            </h1>
            <p className='text-sm sm:text-base md:text-lg font-medium text-gray-600 mb-1'>Answer:</p>
            <h1 className='text-base sm:text-lg md:text-xl pb-3 mb-4 border-b border-dashed border-gray-200'>
                {question.answer}
            </h1>
            <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-500'>
                <TbCalendarHeart className='text-blue-500' />
                <p>Added at 2023-11-12</p>
            </div>
        </div>
    );
};

export default Blog;