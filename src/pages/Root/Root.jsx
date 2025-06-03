import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className='w-3/4 mx-auto relative'>
            <Navbar />
            
            {/* Global route loading spinner */}
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 z-50">
                    <LoadingSpinner />
                </div>
            )}
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
