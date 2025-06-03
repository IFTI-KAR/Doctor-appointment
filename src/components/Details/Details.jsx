import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { addToStoredDB } from '../../utility/addtoDb';

const Details = () => {
    const {id} = useParams();
    

    const data = useLoaderData() || [];
    

    const singleDoctor = data.find(doctor => doctor && doctor.registration_number === id);
    

    if (!singleDoctor) {
        return (
            <div className="max-w-7xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Not Found</h1>
                    <p className="text-gray-600 mb-8">
                        Sorry, we couldn't find a doctor with the registration number: {id}
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-8">
                        <p className="text-gray-700">
                            The doctor you are looking for may not exist or the registration number might be incorrect.
                        </p>
                    </div>
                    <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }


    const { name, education, speciality, workspace, registration_number, availability, consultation_fee, details, doctor_image } = singleDoctor;

    const handleAppointment = (id, name) => {
        addToStoredDB(id, name);
    };
    
    
    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className='bg-white rounded-lg mb-6 text-center p-10'>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor's Profile Details</h1>
                <p className="text-gray-600 mb-8">
                    {details}
                </p>
            </div>
            <div className="flex gap-4 bg-white rounded-lg shadow-md p-8 mb-8">
                <div className='w-1/2'><img src={doctor_image} alt={`Dr. ${name}`} /></div>
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600">Dr. {name}</h2>
                        <p className="text-gray-700 mt-2">{education}</p>
                        <p className="text-gray-700">{speciality}</p>
                    </div>
                    
                    <div>
                        <h3 className="font-medium text-gray-800">Working at</h3>
                        <p className="text-lg font-semibold text-gray-900">{workspace}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                        <span>☉</span>
                        <span>Reg No: {registration_number}</span>
                    </div>
                    
                    <div>
                        <h3 className="font-medium text-gray-800">Availability</h3>
                        <div className="flex gap-4 mt-2">
                            {availability.map(day => (
                                <span key={day} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                    {day}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-medium text-gray-800">Consultation Fee:</h3>
                        <p className="text-gray-700">{consultation_fee} (incl. VAT) Per consultation</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 py-4 border-dashed">Book an Appointment</h2>
                
                <div className="space-y-6">
                    <div className='flex justify-between'>
                        <h3 className="font-medium text-gray-800">Availability</h3>
                        <button className='btn btn-outline btn-accent'>Doctor Available Today</button>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-gray-700">
                            ☐ Due to high patient volume, we are currently accepting appointments for today only. 
                            We appreciate your understanding and cooperation.
                        </p>
                    </div>
                    
                    <button
  onClick={() => handleAppointment(id, name)}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
>
  Book Appointment Now
</button>

                </div>
            </div>
        </div>
    );
};

export default Details;