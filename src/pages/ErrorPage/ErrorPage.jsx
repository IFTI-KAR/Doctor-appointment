import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto text-center'>
            <Navbar></Navbar>
            <div className=''>
                    <img src="../../../public/error.png" alt="" />
                    <h1 className='text-4xl text-red-400 font-bold my-8'>404- Page Not Found</h1>
                    <p className='text-2xl my-4'>Oops the page you are looking for is missing.</p>
                    <Link to="/"><button className='btn bg-blue-600 text-white px-4 py-2 my-8'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;