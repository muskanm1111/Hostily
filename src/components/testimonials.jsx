"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc sem, sit amet luctus tellus tempus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      author: "Akshay Kumar",
    
    },
    {
      content:
        "Proin sagittis maximus accumsan. Maecenas tempor convallis ultrices. Cras a cursus sem. Suspendisse dignissim auctor commodo. Nulla facilisi. Maecenas vel laoreet enim.",
      author: "Ritesh Kumar",
      
    },
    {
      content:
        "Fusce gravida at risus eget fringilla. Quisque vestibulum massa a quam fringilla varius. Aliquam cursus tellus quis odio facilisis, ut pulvinar elit finibus.",
      author: "Ram Kapoor",
      
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-20 ">
      <div className="max-w-[80.50rem] mx-auto px-4 p-16 shadow bg-[#0e1317] ">
       

        {/* Title */}
        <h2 className=" font-bold text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-4   text-start ">
          {testimonials[currentTestimonial].author}
        </h2>
        {/* <p className="text-[#E9967A] text-xl md:text-base leading-relaxed max-w-4xl  mb-6 mx-auto ">
          {testimonials[currentTestimonial].location}
        </p> */}

        {/* Quote mark */}
        <div className="relative">
          {/* <div className="absolute right-0 top-0 text-gray-100 text-[200px] font-serif leading-none z-0">
            &#8220;
          </div> */}

          {/* Testimonial content */}
          <div className="relative z-10 pb-16">
            <p className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              {testimonials[currentTestimonial].content}
            </p>

            {/* Author info and navigation */}
            {/* <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <div>
                  <h4 className="font-bold text-xl">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div> */}

            {/* Navigation buttons */}
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="default"
                size="icon"
                //   className="bg-blue-600 hover:bg-blue-700  rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="default"
                size="icon"
                //   className="bg-blue-600 hover:bg-blue-700  rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Testimonials;
