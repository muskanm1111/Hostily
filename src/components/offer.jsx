import React from 'react';
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
    <div className=" h-screen md:h-[500px] bg-black bg-fixed bg-[url(/video.jpg)] bg-center">
      <div className="relative inset-0 h-screen md:h-[500px] w-full">
        {/* Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-start z-10">
          <div className="text-center   mx-auto  max-w-7xl text-white  ">
            <div className="flex flex-col items-center md:items-center justify-center px-4  ">
              <span className="text-[2rem] capitalize md:text-6xl     font-semibold mb-0 md:mb-4">
                Book hotel rooms get
              </span>
              <span className="text-[2rem] capitalize md:text-6xl   font-semibold ">
                deals & book flights online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;