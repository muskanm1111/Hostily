"use client";
import Image from "next/image";
import { CalendarIcon, ChevronDown } from "lucide-react";

export default function Banner() {
 return (
   <main>
 
     <div>
       <div className="relative  h-[140vh] md:h-screen  bg-black">
         {/* Image */}
         <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat">
           <Image
             src="/banner-1.jpg"
             alt="bg"
             width={1920}
             height={1080}
             className="h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black/50"></div>
         </div>

         {/* Content */}
         <div className="relative h-full flex flex-col justify-center items-center px-4 text-center md:text-left">
           <div className="container mx-auto">
             <div className="md:px-28 mb-56 md:mb-0">
               <h1 className="text-white text-4xl md:text-7xl px-2 font-bold md:font-semibold max-w-4xl mb-4">
                 The Best Hotel
               </h1>
               <h1 className="md:ml-20  text-white text-4xl md:text-7xl  font-bold md:font-semibold  mb-4">
                 Deals in the World
               </h1>
             </div>
           </div>

         
         </div>
       </div>
     </div>
   </main>
 );
}
