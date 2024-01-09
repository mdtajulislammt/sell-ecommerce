import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
     return (
          <div className=" font-primaryFront ">
               <Navbar></Navbar>
              <Outlet></Outlet> 
              <Footer/>
          </div>
     );
};

export default Main;