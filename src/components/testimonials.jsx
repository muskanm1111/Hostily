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
      <div className="max-w-7xl mx-auto px-4 p-20  sm:h-[400px] md:p-16 shadow bg-[#0e1317] ">
       

        
        <h2 className=" font-bold text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-4   text-start ">
          {testimonials[currentTestimonial].author}
        </h2>
       <div className="relative">
          <div className="relative z-10 pb-16">
            <p className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              {testimonials[currentTestimonial].content}
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="default"
                size="icon"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
