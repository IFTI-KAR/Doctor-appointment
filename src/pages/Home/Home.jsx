import React, { Suspense } from 'react';
import Banner from '../../components/Banner/banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {
    const data =useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Doctors data={data}></Doctors></Suspense>
            <Services></Services>
        </div>
    );
};

export default Home;