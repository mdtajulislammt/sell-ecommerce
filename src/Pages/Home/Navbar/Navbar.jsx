import NavHeader from "./NavHeader/NavHeader";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";

const Navbar = () => {
     return (
          <nav className="">
             <NavHeader/>
             <NavLogo/>
             <NavLinks/>  
          </nav>
     );
};

export default Navbar;