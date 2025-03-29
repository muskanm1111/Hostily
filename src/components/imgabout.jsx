"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RestaurantShowcase = ({
  imageSrc = "/feature-1.webp",
  imageAlt = "Restaurant interior",
 
  title = "Centrally Air-Conditioned",
  description = "Experience ultimate comfort in our centrally air-conditioned hostel. Whether hot summer or cool winter, you will always find a perfect, cozy oasis to relax and feel good.",

  ctaText = "READ MORE",
  ctaLink = "#",
  reversed = false,
}) => {
  return (
    <div className="">
      <div className="w-full py-12  bg-gray-100">
        <div className="max-w-[80.50rem] mx-auto px-4">
          <div
            className={`flex flex-col  ${
              reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8 lg:gap-20`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 ">
              <div className="relative overflow-hidden  ">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                {/* <p className="text-[#E9967A] font-medium">{tagline}</p> */}
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold  text-gray-900">
                  {title}
                </h2>
                <p className="text-gray-600 max-w-md">{description}</p>
              </div>

              {/* <button className="flex md:flex w-[180px] bg-white h-[50px]  items-center justify-center  cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow hover:scale-105 hover:shadow before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E9967A] before:to-[#E9967A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before: hover:before:left-0 text-[#E9967A] hover:text-white  text-base font-semibold ">
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantShowcase;
