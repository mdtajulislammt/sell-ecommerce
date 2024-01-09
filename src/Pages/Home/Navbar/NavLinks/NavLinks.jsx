import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLinks = () => {
  const [open, setOpen] = useState(false);  

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold md:hover:text-primary-blue hover:text-primary-white"
              : " font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold md:hover:text-primary-blue hover:text-primary-white"
              : " font-semibold"
          }
        >
          Crazy offers !
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold md:hover:text-primary-blue hover:text-primary-white"
              : " font-semibold"
          }
        >
          joggers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold md:hover:text-primary-blue hover:text-primary-white"
              : " font-semibold"
          }
        >
          hoodies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-blue"
              : " font-semibold"
          }
        >
          solid polo
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-blue"
              : " font-semibold"
          }
        >
          shorts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px] font-extrabold md:hover:text-primary-blue hover:text-primary-white"
              : " font-semibold"
          }
        >
          collections
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" md:px-10  md:mt-4  leading-[-20px]">
      <div className="md:block hidden"><ul className=" flex gap-9  tracking-wider   flex-wrap uppercase justify-center ">{navLinks}</ul></div>

       {/* mobile menu bar  */}
       <div onClick={()=>setOpen(!open)} className={`z-[998] md:hidden text-3xl ${open? "text-gray-900 " : "text-primary-black"} md:hidden`}>
                         {
                              open ? <IoClose className="text-primary-black  " /> : <IoMenu className=" text-primary-black" />
                         }
                    
                    </div>
                    <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-primary-blue top-0 ${open ? "left-0 duration-300": "left-[-100%] duration-300"}`}>
                         <ul className=" flex uppercase flex-col justify-center h-full gap-10 py-2 text-lg">
                           {navLinks}  
                            
                         </ul>
                         
                    </div>
      
    </div>
  );
};

export default NavLinks;


