import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='flex flex-col items-center px-4 py-8'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center'>Our Best Doctors</h1>
      <p className='text-lg md:text-xl lg:text-2xl font-semibold w-full md:w-4/5 lg:w-3/4 text-center mb-8'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {data.map((doctor, index) => (
          (showAll || index < 6) && (
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Doctor key={doctor.registration_number} singleDoctor={doctor} /></Suspense>
          )
        ))}
      </div>

      {!showAll && data.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center transition-colors duration-200"
        >
          View All Doctors
        </button>
      )}
    </div>
  );
};

export default Doctors;