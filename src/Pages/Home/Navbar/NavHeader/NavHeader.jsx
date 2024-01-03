import { Link } from "react-router-dom";
import NavSearching from "./NavSearching";
import { PiShoppingCartBold } from "react-icons/pi";

const NavHeader = () => {
     return (
          <div className=" bg-primary-green flex justify-between p-2 font-bold text-sm  px-10 text-primary-white ">
               <div>
                    <h3 className="mt-2 ">Advance bKash 130 BDT on Outside Dhaka Orders. (bKash merchant payment-01708729789) <br /> Call to Order: 096 13119911 (10am- 10pm).</h3>
               </div>
               <div> 
                    <div className=" flex justify-end gap-1 mb-1">
                         <Link>Log in</Link>
                         <span> / </span>
                         <Link>Sign up</Link>
                    </div>
                    <div className=" flex justify-end items-center gap-6">
                         <Link className=" flex items-center  gap-2"> <PiShoppingCartBold /> <span>Cart</span></Link>
                         <NavSearching/>
                    </div>
               </div>
          </div>
     );
};

export default NavHeader;