import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, breadcrumbs }) => {
  return (
    <div
      className="relative w-full bg-cover bg-center h-[400px] flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/video.jpg')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
        <nav>
          <ul className="flex items-center justify-center space-x-2 text-sm">
            
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
          
            <ChevronRight className="h-4 w-4" />
            <li className="text-gray-300">{breadcrumbs}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
