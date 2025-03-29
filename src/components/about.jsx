"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="w-full py-28  bg-white">
      <div className="max-w-[80.50rem] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Content  */}
          <div className="w-full lg:w-1/2 space-y-8 pt-8">
            <p className="text-[#E9967A] font-medium">Accommodations</p>

            <h2 className="text-4xl md:text-4xl  lg:text-5xl font-semibold text-gray-900 leading-tight">
              Welcome Our Hotels
              <br />
              And Resorts
            </h2>

            <p className="text-gray-700 max-w-md">
              Savvy travelers are looking for more than just the next
              destination on the map. They are looking for a memorable
              experience and to make new friends along the way.
            </p>

            <button className="hidden md:flex w-[180px] bg-[#E9967A] h-[50px]  items-center justify-center  cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow hover:scale-105 hover:shadow before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before: hover:before:left-0 text-white hover:text-white  text-base font-semibold ">
              READ MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Images */}
          <div className="w-full lg:w-1/2  mt-20 relative">
            <div className="grid grid-cols-1 gap-4">
              {/* Main room image */}
              <div className="relative h-64 md:h-80 lg:h-96 w-full">
                <Image
                  src="/hotel-1.webp"
                  alt="Luxury hotel bedroom"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary room image - positioned absolutely */}
              <div className="absolute -top-16 -right-20 w-2/3 h-48 md:h-64 hidden md:block">
                <Image
                  src="/hotel-2.webp"
                  alt="Hotel living area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
