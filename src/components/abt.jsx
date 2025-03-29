import Image from "next/image";
import React from "react";

const Abt = () => {
  return (
    <div className="relative bg-gray-50 py-28 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-[#0e1317] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
            <Image
              src="/luxury-7.webp"
              alt="Universal Machines Construction Vehicle"
              width={400}
              height={300}
              className="object-cover w-full h-[400px] rounded-xl"
            />
            <div className="absolute inset-0 bg-[#0e1317] opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
        {/* Content */}
        <div className="space-y-6">
          <div className="relative">
            <h2 className="text-4xl   mb-10 md:text-4xl  lg:text-5xl font-semibold text-gray-900 leading-tight">
              Book now and save up to 35% On hotel rooms
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              hasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              felis. Nulla non pulvinar enim, vel viverra nunc. Integer
              condimentum vulputate justo. Morbi rhoncus elit in tellus viverra,
              vel fermentum orci dictum. Vestibulum non nisi commodo, tincidunt
              elit non, consectetur tellus. Fusce in commodo velit. In dapibus
              dui vitae tortor ullamcorper mollis.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Savvy travelers are looking for more than just the next
              destination on the map. They are looking for a memorable
              experience and to make new friends along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Abt ;
