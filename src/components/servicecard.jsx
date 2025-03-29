
import React from "react";
import { MdOutlineCellWifi, MdOutlineCleaningServices } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";


// Hotel Services Data
const hotelServices = [
  {
    icon: <MdOutlineCleaningServices size={28} className="text-[#E9967A] " />,
    title: "Room Cleaning",
    description:
      "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
  },
  {
    icon: <MdOutlineCellWifi size={28} className="text-[#E9967A]" />,
    title: "Room Wifi",
    description:
      "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
  },
  {
    icon: <GrMapLocation size={28} className="text-[#E9967A]" />,
    title: "Pickup & Drop",
    description:
      "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor",
  },
];

const HotelServices = () => {
  return (
    <div className="max-w-7xl mx-auto  px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hotelServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-center text-start "
          >
            <div className="mb-4 bg-gray-100  rounded-full p-6">
              {service.icon}
            </div>

            <div className="flex flex-col ml-6 p-6 ">
              <h3 className="text-xl  font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600  ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelServices;
