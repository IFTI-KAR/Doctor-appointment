import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          We Provide Best Medical Services
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {[
          { icon: "/success-doctor.png", count: 199, label: "Total Doctors" },
          { icon: "/success-review.png", count: 467, label: "Total Reviews" },
          { icon: "/success-patients.png", count: 1900, label: "Patients" },
          { icon: "/success-staffs.png", count: 300, label: "Total Staff" }
        ].map((service, index) => (
          <div 
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
          >
            <img 
              src={service.icon} 
              alt={service.label} 
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4" 
            />
            <div className='flex items-center justify-center'>
              <CountUp 
                end={service.count} 
                duration={2.5} 
                className="text-2xl sm:text-3xl font-bold"
              />
              <p className='text-2xl sm:text-3xl'>+</p>
            </div>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;