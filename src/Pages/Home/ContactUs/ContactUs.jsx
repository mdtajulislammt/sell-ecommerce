import contactImg from '../../../assets/contactUs.webp'
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
     return (
          <div>
               <div className=' lg:flex flex-row-reverse justify-between my-10 items-center bg-gray-200 '>
                    <img src={contactImg} alt="" className='w-full' />
                    <div className=' p-5 lg:pl-20 w-full'>
                         <h2 className=' text-4xl font-bold text-center'>Our Office</h2>
                         <p className=' text-xl font-semibold text-center my-3'>1712-Tongi,Gazipur,Dhaka,Bangladesh </p>
                         <button className=' flex items-center gap-2 mx-auto bg-primary-yellow font-bold p-3 px-5 rounded'><FaLocationDot /> <span>Directions</span></button>
                    </div>
               </div>
          </div>
     );
};

export default ContactUs;