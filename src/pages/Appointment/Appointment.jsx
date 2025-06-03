import React, { Suspense, useEffect, useState } from 'react';
import { getStoredDoctor, removeFromStoredDB } from '../../utility/addtoDb';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';
import Charts from '../Charts/Charts';
import Book from '../Book/Book';

const Appointment = () => {
    const [appointment, setAppointment] = useState(null); // Start with null for loading state
    const data = useLoaderData();

    useEffect(() => {
        const getStoredData = getStoredDoctor();
        const myAppointment = data.filter(doctor => 
            getStoredData.includes(doctor.registration_number)
        );
        setAppointment(myAppointment);
    }, [data]);

    const handleRemoveAppointment = (regNumber) => {
        removeFromStoredDB(regNumber);
        setAppointment(prev => 
            prev.filter(doctor => doctor.registration_number !== regNumber)
        );
    };

    // Loading state
    if (appointment === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container text-center mx-auto px-4 py-8">
            {appointment.length === 0 ? (
                <Suspense fallback={
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                }>
                    <Book />
                </Suspense>
            ) : (
                <>
                    <div className="mb-8 ">
                        <Suspense fallback={
                            <div className="flex justify-center items-center h-64">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        }>
                            <Charts appointment={appointment} />
                        </Suspense>
                    </div>

                    <div className="mb-8 flex flex-col items-center text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                            My Today Appointments
                        </h1>
                        <h3 className="text-gray-600 text-base md:text-lg">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-3 gap-6">
                        {appointment.map(doctor => (
                            <Card 
                                key={doctor.registration_number} 
                                doctor={doctor} 
                                handleRemoveAppointment={handleRemoveAppointment} 
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Appointment;