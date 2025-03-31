"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RestaurantShowcase = ({
  imageSrc = "/1.2.jpeg",
  imageAlt = "Restaurant interior",

  title = "Centrally Air-Conditioned",
  description = "Experience ultimate comfort in our centrally air-conditioned hostel. Whether hot summer or cool winter, you will always find a perfect, cozy oasis to relax and feel good.",

  ctaText = "READ MORE",
  ctaLink = "#",
  reversed = false,
}) => {
  return (
    <div >
      <div className="w-full py-12  bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex flex-col  ${
              reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8 lg:gap-20`}
          >
            {/* Image  */}
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

            {/* Content  */}
            <div className="w-full lg:w-1/2 space-y-6 ">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-4 text-gray-900">
                  {title}
                </h2>
                <p className="text-gray-600 px-4 max-w-md">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantShowcase;
