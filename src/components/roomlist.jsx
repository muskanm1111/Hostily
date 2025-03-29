import Link from "next/link";
import Image from "next/image";

import { roomData } from "@/utils/data";
import { Bed, Users } from "lucide-react";

export default function Roomlist() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          {roomData.map((room) => (
            <Link href={`/room/${room.id}`} key={room.id} className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section - Made larger and more prominent */}
                  <div className="md:w-2/5 h-[250px] md:h-[300px]">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Details Section - Better spacing and typography */}
                  <div className="flex-1 p-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">
                      {room.name}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-8 mb-6">
                      <div className="flex items-center gap-3">
                        <Bed className="text-[#E9967A]" />
                        <span className="text-gray-700">{room.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-[#E9967A]" />
                        <span className="text-gray-700">
                          {room.guests} Guests
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl ${
                              i < room.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-600 ml-2">{room.rating}</span>
                      <button className="ml-auto text-[#E9967A] font-semibold hover:text-[#E9967A]/80 transition-colors flex items-center gap-2">
                        VIEW DETAILS
                        <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
