import React from 'react';
import Image from 'next/image';

// Hotel Services Data
const hotelServices = [
  {
    icon: '/icons/cleaning.svg',
    title: 'Room Cleaning',
    description: 'Comprehensive room sanitization and cleaning services'
  },
  {
    icon: '/icons/wifi.svg',
    title: 'Room Wifi',
    description: 'High-speed internet access in every room'
  },
  {
    icon: '/icons/pickup.svg',
    title: 'Pickup & Drop',
    description: 'Convenient airport and local transportation'
  }
];

const Offer = () => {
  return (
    <div className="h-[500px] bg-black bg-fixed bg-[url(/video.jpg)] bg-center">
      {/* Hero Section */}
      <div className="relative inset-0 h-[500px] w-full">
        {/* Background Image */}

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-start z-10">
          <div className="text-start   mx-auto  max-w-7xl text-white  ">
            <div className="flex flex-col items-start md:items-center justify-center px-2  ">
              <span className="text-3xl capitalize md:text-6xl     font-semibold mb-0 md:mb-4">
                Book hotel rooms
              </span>
              <span className="text-3xl capitalize md:text-6xl   font-semibold ">
               
                get deals & book flights online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;