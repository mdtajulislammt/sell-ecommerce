
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay,Navigation, Pagination } from 'swiper/modules';

// image
import img1 from "../../../assets/img13.webp";
import img2 from "../../../assets/img14.webp";
import img3 from "../../../assets/img15.webp";
import img4 from "../../../assets/img16.webp";
import SectionTittle from '../../../Sheared/SectionTittle';



const LetestProducts = () => {
     return (
          <div className=''>
               <SectionTittle header={'Latest Products'}/>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        Navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination,Navigation]}
        className=" mt-7 cursor-pointer"
      >
        <SwiperSlide>
          <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img1} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img2} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img3} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img4} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img2} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img1} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img3} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-md shadow-md bg-primary-yellow pt-5'>
          <img src={img4} alt="" className=' rounded-md object-cover mx-auto'/>
          <h2 className='my-2 text-xl text-primary-blue font-bold text-center'>T-Shirt</h2>
          </div>
        </SwiperSlide>
        
      </Swiper> 
          </div>
     );
};

export default LetestProducts;