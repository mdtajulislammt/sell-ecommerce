import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
const NavUser = () => {
     return (
          <div>
                  <div className="dropdown inline-block relative cursor-pointer">
                    <FaRegCircleUser className="md:text-2xl " />
                    <ul className="dropdown-menu absolute hidden text-primary-white font-semibold py-2 px-2  w-28 -ml-10 duration-150  bg-primary-blue rounded-md">
                      <li className=" hover:bg-primary-yellow duration-200 hover:text-primary-black font-bold rounded px-4">
                        <Link to={'/login'}>Log in</Link>
                      </li>
                      <li className=" hover:bg-primary-yellow rounded duration-200 hover:text-primary-black font-bold px-4">
                        <Link to={'/signUp'}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
              </div>
     );
};

export default NavUser;