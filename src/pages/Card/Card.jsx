import React from 'react';
import { toast } from '../../utility/toast';
const Card = ({ doctor, handleRemoveAppointment }) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
            <div className="mt-2 text-sm text-gray-600">
                <p>{doctor.education}</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between items-center">
                <span className="text-gray-700">Appointment Fee:</span>
                <span className="font-semibold">{doctor.consultation_fee} Taka + Vat</span>
            </div>
            <button 
                onClick={() => {
                    handleRemoveAppointment(doctor.registration_number)
                    toast.success('Appointment cancelled!')
                }
                }
                className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-200"
            >
                Cancel Appointment
            </button>
        </div>
    );
};

export default Card;