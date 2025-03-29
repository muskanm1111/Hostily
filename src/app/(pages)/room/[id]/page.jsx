
import Link from "next/link";
import Image from "next/image";
import { roomData } from "@/utils/data";
import Breadcrumb from "@/components/breadcrumb";
import { Bed, Users } from "lucide-react";

export default function RoomDetail({ params }) {
  const { id } = params;
  const room = roomData.find((room) => room.id === Number.parseInt(id));

  if (!room) {
    return <div className="text-center py-20">Room not found</div>;
  }
  return (
    <>
      <Breadcrumb title=" Room Details" breadcrumbs={room.name} />
      <div className="max-w-7xl mx-auto py-28 p-4">
        <div className="mb-6">
          <Link
            href="/room"
            className="text-[#E9967A] hover:underline flex items-center"
          >
            <span>← Back to rooms</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{room.name}</h1>

            <div className="mb-6">
              <Image
                src={room.image}
                alt={room.name}
                width={800}
                height={500}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Bed className="text-[#E9967A]" />
                <span>({room.beds}) bed&apos;s</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-[#E9967A]" />
                <span>({room.guests}) Guest&apos;s</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < room.rating ? "text-[#E9967A]" : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500">{room.rating}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <p className="text-gray-700 mb-4">{room.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#E9967A]">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Book This Room</h2>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Check In</label>
                <div className="border p-3 flex justify-between items-center cursor-pointer">
                  <span>Select date</span>
                  <span>▼</span>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Check Out</label>
                <div className="border p-3 flex justify-between items-center cursor-pointer">
                  <span>Select date</span>
                  <span>▼</span>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Guests</label>
                <div className="border p-3 flex justify-between items-center cursor-pointer">
                  <span>1 Adult</span>
                  <span>▼</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span>${room.price} × 1 night</span>
                  <span>${room.price}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Cleaning fee</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Service fee</span>
                  <span>$20</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total</span>
                  <span>${room.price + 50}</span>
                </div>
              </div>

              <button className="bg-[#E9967A] text-white py-3 px-4 w-full flex items-center justify-center font-semibold">
                BOOK NOW <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
