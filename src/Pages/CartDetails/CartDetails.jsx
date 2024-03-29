import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// image import
import addImg1 from "../../assets/add1.webp"
import addImg2 from "../../assets/add2.webp"
import addImg3 from "../../assets/add3.webp"
import addImg4 from "../../assets/add4.webp"
import { Link } from "react-router-dom"
import BestSeller from "../Home/BestSeller/BestSeller"


function ThumbnailPlugin(mainRef) {
     return (slider) => {
       function removeActive() {
         slider.slides.forEach((slide) => {
           slide.classList.remove("active")
         })
       }
       function addActive(idx) {
         slider.slides[idx].classList.add("active")
       }
   
       function addClickEvents() {
         slider.slides.forEach((slide, idx) => {
           slide.addEventListener("click", () => {
             if (mainRef.current) mainRef.current.moveToIdx(idx)
           })
         })
       }
   
       slider.on("created", () => {
         if (!mainRef.current) return
         addActive(slider.track.details.rel)
         addClickEvents()
         mainRef.current.on("animationStarted", (main) => {
           removeActive()
           const next = main.animator.targetIdx || 0
           addActive(main.track.absToRel(next))
           slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
         })
       })
     }
   }

const CartDetails = () => {
     const [sliderRef, instanceRef] = useKeenSlider({
          initial: 0,
        })
        const [thumbnailRef] = useKeenSlider(
          {
            initial: 0,
            slides: {
              perView: 4,
              spacing: 10,
            },
          },
          [ThumbnailPlugin(instanceRef)]
        )
     return (
          <div className="px-10 pb-10 pt-32 lg:pt-0">
               <div className=" md:flex justify-center  gap-10   ">
             <div className=" md:w-[300px]    justify-start">
             <div ref={sliderRef} className="keen-slider  border">
        <div className="keen-slider__slide number-slide1 w-full"><img src={addImg1} alt=""  /></div>
        <div className="keen-slider__slide number-slide2"><img src={addImg2} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img src={addImg3} alt="" /></div>
        <div className="keen-slider__slide number-slide4"><img src={addImg4} alt="" /></div>
        
      </div>

      <div ref={thumbnailRef} className=" flex  items-center  gap-2 my-3 w-[300px]">
        <div className="keen-slider__slide number-slide1"><img src={addImg1} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img src={addImg2} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img src={addImg3} alt="" /></div>
        <div className="keen-slider__slide number-slide4"><img src={addImg4} alt="" /></div>
      </div>
             </div>

             <div className="w-[450px]">
               <h2 className=" text-2xl font-bold">Tittle</h2>
               <p className=" font-semibold mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci atque culpa quia </p>
               <p className=" font-semibold  = items-center gap-4 justify-center"> <span className=" font-bold text-3xl">$2000</span><s className="text-gray-600 px-3 text-lg" >$4000</s> <span className=" text-2xl font-bold text-primary-blue">58% OFF</span> </p>
               <p className="font-semibold mb-7">*Subject to VAT inclusion</p>
               {/* size button */}
               <div className="mb-3">
                    <h3 className=" text-lg font-semibold items-center">Size :</h3>
                    <div className=" flex gap-4">
                      <h3 className=" text-center font-extrabold border-2 border-primary-yellow rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">M</h3>
                      <h3 className=" text-center font-extrabold border-2 border-primary-yellow rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">L</h3>
                      <h3 className=" text-center font-extrabold border-2 border-primary-yellow rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">XL</h3>
                      <h3 className=" text-center font-extrabold border-2 border-primary-yellow rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">2XL</h3>
                      <h3 className=" text-center font-extrabold border-2 border-primary-yellow rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">3XL</h3>
                      
                    </div>
               </div>
               {/* Quantity */}
               <div>
                    <h3 className=" text-lg font-semibold">Quantity :</h3>
                    <h3 className=" flex items-center gap-4 rounded border-2 border-primary-yellow justify-between w-32">
                      <span className=" text-center font-extrabold   rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer ">-</span>
                      <span>1</span>
                      <span className=" text-center font-extrabold   rounded px-4 py-2 hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">+</span>
                    </h3>
               </div>

               <div>
               <Link to={'/addToCart'}> <button className=" border-2 mb-7  p-2 px-5 uppercase font-bold mt-4 border-primary-yellow  hover:bg-black hover:text-primary-yellow hover:border-primary-black duration-200 cursor-pointer">ADD to card</button></Link>
               <Link> <button className=" border-2 mb-7  p-2 px-5 uppercase font-bold mt-4 border-primary-blue bg-primary-blue text-primary-white ml-2 ">Buy It now</button></Link>
               </div>
               <ul className="list-disc ml-5 text-lg font-bold text-gray-500">
                <li>Full Sleeve Casual Zip Hoodie with drawstring</li>
                <li>Kangaroo pocket</li>
                <li>Soft, comfortable and perfect for winter</li>
                <li>100% Cotton fleece inside brushed, 300gsm</li>
                <li>Soft Finished</li>
                <li>Used 2X2 Lycra Rib at bottom & cuff</li>
               </ul>
             </div>
          </div>
          <div className="divider"></div> 
          <BestSeller/>
          </div>
     );
};

export default CartDetails;