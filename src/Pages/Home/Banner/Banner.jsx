import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

//image
import banner1 from '../../../assets/banner2.webp'
import banner2 from  '../../../assets/banner1.webp'
import banner3 from  '../../../assets/banner3.webp'
import { Link } from 'react-router-dom';

const Banner = () => {
     return (
          <div className='mb-20 text-black'>
               <Swiper
        spaceBetween={30}
        
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper h-[450px]"
      >
          {/* 1st slider */}
        <SwiperSlide>
          <img 
          className='w-full absolute h-full object-cover'
          src={banner1} />
          <Link to={'/'}><button className=' relative left-[50%] top-2 font-bold rounded-[3px] text-primary-white bg-primary-greenLight p-3 px-5 uppercase'>Shop now</button></Link>
        </SwiperSlide>
        {/* 2nd slider */}
        <SwiperSlide>
          <img
          className='w-full absolute h-full object-cover'
          src={banner2} />
          <Link to={'/'}><button className=' relative left-[50%] top-2 font-bold rounded-[3px] text-primary-white bg-primary-greenLight p-3 px-5 uppercase'>Offer now</button></Link>
        </SwiperSlide>
        {/* 3rd slider */}
        <SwiperSlide>
          <img
          className='w-full absolute h-full object-cover'
          src={banner3} />
          <Link to={'/'}><button className=' relative left-[50%] top-2 font-bold rounded-[3px] text-primary-white bg-primary-greenLight p-3 px-5 uppercase'>Shop now</button></Link>
        </SwiperSlide>
        {/* 4th slider */}
        <SwiperSlide>
          <img
          className='w-full absolute h-full object-cover'
          src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <Link to={'/'}><button className=' relative left-[50%] top-2 font-bold rounded-[3px] text-primary-white bg-primary-greenLight p-3 px-5 uppercase'>Offer now</button></Link>
        </SwiperSlide>
      </Swiper>


          </div>
     );
};

export default Banner;