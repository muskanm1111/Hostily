"use client";
import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";

const Amenities = () => {
  const amenities = [
    {
      icon: GrMapLocation,
      title: "Room Cleaning",
      description:
        "Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris",
    },
    {
      icon: IoCarSportOutline,
      title: "Car Parking",
      description:
        "Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris",
    },
    {
      icon: FaSwimmingPool,
      title: "Swimming pool",
      description:
        "Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris",
    },
    {
      icon: GrMapLocation,
      title: "PickUp & Drop",
      description:
        "Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris",
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-start  hover:border hover:border-[#E9967A] text-center p-10 bg-white shadow-md  hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4 text-[#E9967A]">
              <amenity.icon size={50} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {amenity.title}
            </h3>
            <p className="text-gray-600 flex items-start text-start  text-sm">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
