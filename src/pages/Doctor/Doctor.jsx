import React from 'react';
import { TbSquareRoundedLetterR } from "react-icons/tb";
import { Link } from 'react-router';

const Doctor = ({ singleDoctor }) => {
  return (
    <div className="card bg-white w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
      <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
        <img
          src={singleDoctor.doctor_image}
          alt={singleDoctor.name}
          className="rounded-xl w-full h-48 sm:h-56 md:h-60 object-cover mx-auto shadow-md"
        />
      </figure>

      <div className="card-body px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Available
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {singleDoctor.experience}+ Years Experience
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {singleDoctor.name}
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 pb-3 border-b border-dashed border-gray-300 line-clamp-2">
          {singleDoctor.education}
        </p>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
          <TbSquareRoundedLetterR className="flex-shrink-0" />
          <span className="truncate">Reg No: {singleDoctor.registration_number}</span>
        </div>
        
        <Link 
          to={`/viewDetails/${singleDoctor.registration_number}`}
          className="btn btn-info w-full text-sm sm:text-base py-2 sm:py-2.5 rounded-lg transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Doctor;