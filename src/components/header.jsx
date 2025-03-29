"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { TbBrandGoogleHome } from "react-icons/tb";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const togglebtn = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-20 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={`${scrolled ? "text-[#E9967A]" : "text-[#E9967A]"} mr-2`}
          >
            <TbBrandGoogleHome size={38} className="stroke-1" />
          </div>
          <span
            className={`${
              scrolled ? "text-black" : "text-white"
            } font-semibold text-2xl`}
          >
            Desire Div
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-[1.20rem] items-center space-x-8">
          <NavItem href="/" label="Home" scrolled={scrolled} />
          <NavItem href="/about" label="About" scrolled={scrolled} />
          <NavItem href="/room" label="Room" scrolled={scrolled} />
          <NavItem href="/contact" label="Contact" simple scrolled={scrolled} />
        </nav>

        {/* Mobile Navigation */}
        {show && (
          <nav className="fixed md:hidden inset-0 bg-[#0e1317] z-40 flex flex-col items-start px-8  justify-start py-32 space-y-8 text-xl ">
            <NavItem href="/" label="Home" mobile={true} setShow={setShow} />
            <NavItem
              href="/about"
              label="About"
              mobile={true}
              setShow={setShow}
            />
            <NavItem
              href="/room"
              label="Room"
              mobile={true}
              setShow={setShow}
            />
            <NavItem
              href="/contact"
              label="Contact"
              simple
              mobile={true}
              setShow={setShow}
            />
          </nav>
        )}

        {/* Book Now Button */}
        <button className="hidden md:flex w-[180px] bg-[#E9967A] h-[50px]  items-center justify-center  cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow hover:scale-105 hover:shadow before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before: hover:before:left-0 text-white hover:text-white  text-base font-semibold ">
          BOOK NOW
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>

        {/* Mobile Menu Toggle Button */}
        <button onClick={togglebtn} className="md:hidden text-black z-50">
          {show ? <X size={24} className="text-white" /> : <Menu size={24} />}
        </button>
      </div>
      <hr className={`${scrolled ? "border-gray-200" : "border-gray-600"}`} />
    </header>
  );
}

function NavItem({ href, label, simple = false, mobile = false, setShow, scrolled }) {
  const handleClick = () => {
    if (mobile && setShow) {
      setShow(false);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
         ${scrolled ? "text-black hover:text-[#E9967A]" : "text-white hover:text-[#E9967A]"} 
         font-medium flex items-center transition-colors
         ${mobile ? "text-2xl" : ""}
       `}
    >
      {label}
      {/* {!simple && !mobile && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M12 5v14" />
          <path d="M19 12H5" />
        </svg>
      )} */}
    </Link>
  );
}
