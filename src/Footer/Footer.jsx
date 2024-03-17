import logo from '../assets/Asset 10@4x.png'
import playstore from '../assets/plystore.webp'
import appleStore from '../assets/apple.webp'
import payment from '../assets/master-payments-image.webp'
import { FaApple, FaFacebookF, FaInstagramSquare, FaPinterest, FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <footer className=" py-5 px-8 bg-primary-black text-base-content">
               <Link to={'/'}><img src={logo} alt=""  className='w-52 my-8'/></Link>
  <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 uppercase'>
     {/* CUSTOMER SERVICE */}
  <nav className="text-primary-white flex flex-col">
    <header className=" font-bold text-primary-yellow mb-5">CUSTOMER SERVICE</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  {/* COMPANY */}
  <nav className="text-primary-white flex flex-col ">
    <header className=" font-bold text-primary-yellow mb-5">Company</header> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  {/* CONNECT WITH US */}
  <nav className="text-primary-white flex flex-col gap-2">
    <header className=" font-bold text-primary-yellow mb-5">CONNECT WITH US</header> 
    <a className="link link-hover flex items-center gap-2"><FaInstagramSquare /> <span>4.7M People Like this website</span></a>
    <a className="link link-hover flex items-center gap-2"><FaFacebookF /> <span>1M Followers</span></a>
    <div className='flex items-center gap-5 mt-3'>
    <a className="link link-hover"><FaApple /></a>
    <a className="link link-hover"><FaTwitter /></a>
    <a className="link link-hover"><FaPinterest /></a>
    <a className="link link-hover"><FaSnapchatGhost /></a>
    </div>
  </nav> 
  {/* KEEP UP TO DATE */}
  <form className="text-primary-white flex flex-col">
    <header className=" font-bold text-primary-yellow mb-5">KEEP UP TO DATE</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your Email address</span>
      </label> 
      <div className="join -mt-7">
        <input type="text" placeholder="email" className=" text-primary-black lg:w-40 md:w-20 md:p-3 input-bordered join-item" /> 
        <button className="bg-primary-yellow btn-primary text-primary-black px-2 font-bold join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <nav className="text-primary-white flex flex-col pt-16">
    <a className="link link-hover">15 Days return policy**</a>
    <a className="link link-hover">Cash on delivery**</a>
  </nav>
  {/* DOWNLOAD THE APP */}
  <nav className="text-primary-white flex flex-col pt-7">
  <header className=" font-bold text-primary-yellow mb-3">DOWNLOAD THE APP</header> 
    <div className=' lg:flex items-center gap-2'>
    <img src={playstore} alt="" className='w-28' />
    <img src={appleStore} alt="" className='w-28' />
    </div>
  </nav>
  {/* 100% SECURE PAYMENT */}
  <nav className="text-primary-white flex flex-col pt-7">
  <header className=" font-bold text-primary-yellow mb-3">100% SECURE PAYMENT
</header> 
    <div>
     <img src={payment} alt="" />
    </div>
  </nav>
  </div>
  <div className="footer footer-center p-4 bg-primary-black border-t mt-4 text-primary-white ">
  <aside>
    <p>Copyright © 2024 - All right reserved by MD Tajul Islam</p>
  </aside>
</div>
</footer>
     );
};

export default Footer;
