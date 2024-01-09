import NavHeader from "./NavHeader/NavHeader";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";
import NavSearching from "./NavHeader/NavSearching";

import "./styles.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import NavUser from "./NavUser/NavUser";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("navb");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className=" shadow-xl  lg:mb-40 md:mb-16">
     {/* Navbar Header */}
      <NavHeader />

      {/* Navbar Body */}
      <div
        className={`navb md:px-10 md:block hidden px-5 py-5 border-b-2 border-primary-black fixed z-[999] duration-300  w-full bg-primary-yellow ${
          sticky ? "  top-0 duration-300" : " md:py-5 duration-300 "
        }`}
      >
        <div className=" flex justify-between items-center">
          <NavLogo />
          <div className=" flex items-center gap-2">
            <div className=" flex justify-end items-center gap-4">
              {/* Search field */}
              <NavSearching />

              {/* login logout user */}
              <NavUser />
            </div>

            {/* shopping cart */}
            <ShoppingCart />
          </div>
        </div>
        <NavLinks />
      </div>
      {/* responsive navbar */}
      <div
        className={`navb md:px-10 md:hidden px-5 py-5 border-b-2 border-primary-black fixed z-[999] duration-300  w-full bg-primary-yellow ${
          sticky ? "  top-0 duration-300" : " md:py-5 duration-300 "
        }`}
      >
        <div className=" flex justify-between items-center">
          <NavLogo />
          <div className=" flex items-center gap-2">
            <div className=" flex justify-end items-center gap-4">
              {/* Search field */}
              <NavSearching />

              {/* login logout user */}
              <NavUser />
            </div>

            {/* shopping cart */}
            <ShoppingCart /> 
            <NavLinks />
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
