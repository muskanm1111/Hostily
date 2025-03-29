"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCommentDots,
  FaTag,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

export default function Contactsec() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Data:", form);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName) => `
    relative transition-all duration-300 
    ${focused[fieldName] ? "border-[#FF6B6B]" : "border-gray-300"}
    ${errors[fieldName] ? "border-red-500" : ""}
    border-2 rounded-lg
  `;

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 overflow-hidden">
        <div className="relative text-black p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black drop-shadow-md">
              Get In Touch
            </h2>
            <p className="text-black/80 mb-8 text-lg">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </p>

            <div className="space-y-6">
              {[
                { icon: <FaPhoneAlt />, text: "+123 ( 458 ) 896 895" },
                { icon: <FaEnvelope />, text: "hello@desirediv.com" },
                {
                  icon: <FaMapMarkerAlt />,
                  text: "T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza Dwarka Sector-12, New Delhi, 110075",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2  p-4">
                  <div className=" p-3 rounded-full">
                    {React.cloneElement(item.icon, {
                      className: "text-[#E9967A] text-2xl",
                    })}
                  </div>
                  <p className="text-black text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-all duration-300 hover:scale-110"
              >
                <Icon className="text-white text-xl" />
              </a>
            ))}
          </div>
        </div>

        <div className="p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "name", icon: FaUser, placeholder: "Full Name" },
                {
                  name: "email",
                  icon: FaEnvelope,
                  placeholder: "Email Address",
                },
              ].map((field) => (
                <div key={field.name} className={inputClasses(field.name)}>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <field.icon
                      className={`${
                        focused[field.name]
                          ? "text-[#E9967A]"
                          : "text-[#E9967A]"
                      } transition-colors duration-300`}
                    />
                  </div>
                  <input
                    type={field.name === "email" ? "email" : "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-3 pl-12 outline-none"
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                  />
                  {errors[field.name] && (
                    <p className="text-[#E9967A] text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "phone", icon: FaPhoneAlt, placeholder: "Phone" },
                { name: "subject", icon: FaTag, placeholder: "Subject" },
              ].map((field) => (
                <div key={field.name} className={inputClasses(field.name)}>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <field.icon
                      className={`${
                        focused[field.name]
                          ? "text-[#E9967A]"
                          : "text-[#E9967A]"
                      } transition-colors duration-300`}
                    />
                  </div>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-3 pl-12 outline-none"
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                  />
                </div>
              ))}
            </div>

            <div className={inputClasses("message")}>
              <div className="absolute left-4 top-4">
                <FaCommentDots
                  className={`${
                    focused.message ? "text-[#E9967A]" : "text-[#E9967A]"
                  } transition-colors duration-300`}
                />
              </div>
              <textarea
                name="message"
                placeholder="Type your comments...."
                className="w-full p-3 pl-12 outline-none"
                rows="4"
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
              ></textarea>
              {errors.message && (
                <p className="text-[#E9967A] text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`hidden md:flex w-full bg-[#E9967A] h-[50px] items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow hover:scale-105 hover:shadow before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:hover:before:left-0 text-white hover:text-white text-base font-semibold ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              {!isSubmitting && <FaArrowRight className="ml-2 h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 w-full flex items-center justify-center mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234350710511!2d77.04311527461583!3d28.592745575686518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1743151899794!5m2!1sen!2sin"
          className="w-full rounded-lg shadow-lg items-center"
          height="450"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
