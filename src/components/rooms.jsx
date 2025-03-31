"use client";
import { useState } from "react";
import Image from "next/image";


const rooms = [
  {
    id: 1,
    type: "Small Suite",
    price: 134,
    image: "/1.1.jpeg",
    categories: ["All Room", "Small Suite"],
  },
  {
    id: 2,
    type: "Deluxe Room",
    price: 199,
    image: "/1.2.jpeg",
    categories: ["All Room", "Luxury"],
  },
  {
    id: 3,
    type: "Family Room",
    price: 319,
    image: "/1.3.jpeg",
    categories: ["All Room", "Family"],
  },
  {
    id: 4,
    type: "Single Room",
    price: 169,
    image: "/1.5.jpeg",
    categories: ["All Room", "Single"],
  },
  {
    id: 5,
    type: "Luxury Room",
    price: 249,
    image: "/1.4.jpeg",
    categories: ["All Room", "Luxury"],
  },
];


const tabs = ["All Room", "Luxury", "Single", "Small Suite", "Family"];

export default function Rooms() {
  const [activeTab, setActiveTab] = useState("All Room");


  const filteredRooms = rooms.filter((room) =>
    room.categories.includes(activeTab)
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-28 pb-20 md:pb-[4rem]">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-between gap-2  mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-center  md:text-left mb-8">
            Our Luxury Rooms
          </h1>
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 mb-4 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-[#E9967A] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {filteredRooms.slice(3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoomCard({ room }) {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative h-80 w-full">
        <Image
          src={room.image}
          alt={room.type}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{room.type}</h3>
      </div>
    </div>
  );
}
