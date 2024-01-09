import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
     const [showPassword,setShowPassword] = useState(false)
     return (
          <div className=" flex justify-center px-10 lg:pt-0 md:pt-40 pt-28">
                <form
                className=" w-[500px] mb-10 rounded-md border-2 shadow-lg p-4  space-y-4 md:space-y-6"
                action="#"
              >
               <h2 className=" text-5xl uppercase text-center font-bold">SignUp</h2>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Enter your Full Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="img"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Image
                  </label>
                  <input
                    type="text"
                    name="img"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Image"
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 "
                    required=""
                  />
                  <span className=" absolute right-3 top-10  cursor-pointer text-xl text-[#3994e4]" onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<AiFillEye/> :<AiFillEyeInvisible/>}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        name="terms"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                  </div>
                  <a
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full hover:text-black  text-white bg-primary-blue font-semibold rounded-lg text-md px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
                <div className=" flex gap-7">
                
                  <button
                    type="submit"
                    className="w-full mt-3 hover:text-black text-white bg-primary-blue font-semibold rounded-lg text-md px-5 py-2.5 text-center flex items-center justify-center gap-2 "
                  >
                    <AiFillGoogleCircle className=" text-2xl" /> Google
                  </button>
                
                  <button
                    type="submit"
                    className="w-full mt-3 hover:text-black text-white bg-primary-blue font-semibold rounded-lg text-md px-5 py-2.5 text-center flex items-center justify-center gap-2 "
                  >
                    <AiFillFacebook className=" text-2xl" /> Google
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Do not have an account yet?
                  <Link
                    to={"/login"}
                    className="font-medium  ml-2 text-lg  hover:underline text-primary-blue"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
          </div>
     );
};

export default SignUp;