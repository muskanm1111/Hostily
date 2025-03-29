"use client";
import { useState } from "react";
import Image from "next/image";

// Room data
const rooms = [
  {
    id: 1,
    type: "Small Suite",
    price: 134,
    image: "/luxury-1.jpg",
    categories: ["All Room", "Small Suite"],
  },
  {
    id: 2,
    type: "Deluxe Room",
    price: 199,
    image: "/luxury-2.jpg",
    categories: ["All Room", "Luxury"],
  },
  {
    id: 3,
    type: "Family Room",
    price: 319,
    image: "/luxury-3.jpg",
    categories: ["All Room", "Family"],
  },
  {
    id: 4,
    type: "Single Room",
    price: 169,
    image: "/luxury-4.jpg",
    categories: ["All Room", "Single"],
  },
  {
    id: 5,
    type: "Luxury Room",
    price: 249,
    image: "/luxury-5.jpg",
    categories: ["All Room", "Luxury"],
  },
];

// Tab options
const tabs = ["All Room", "Luxury", "Single", "Small Suite", "Family"];

export default function Rooms() {
  const [activeTab, setActiveTab] = useState("All Room");

  // Filter rooms based on active tab
  const filteredRooms = rooms.filter((room) =>
    room.categories.includes(activeTab)
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-28">
        {/* Tabs */}
        <div className="flex flex-wrap  md:justify-between gap-2  mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left mb-8">
            Our Luxury Rooms
          </h1>
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-medium transition-colors ${
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

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredRooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Second Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
          src={room.image || "/placeholder.svg"}
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
