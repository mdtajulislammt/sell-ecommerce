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
               
               <div className="mb-3">
                    <h3 className=" text-lg font-semibold">Size :</h3>
                    <input type="number" placeholder="1" className=" border-2 border-primary-yellow rounded p-2 pl-2 w-20" />
               </div>
               <div>
                    <h3 className=" text-lg font-semibold">Quantity :</h3>
                    <input type="number" placeholder="1" className=" border-2 border-primary-yellow rounded pl-2  p-2" />
               </div>

               <div>
               <Link> <button className=" border-2 mb-7  p-2 px-5 uppercase font-bold mt-4 border-primary-yellow">ADD to card</button></Link>
               <Link> <button className=" border-2 mb-7  p-2 px-5 uppercase font-bold mt-4 border-primary-blue bg-primary-blue text-primary-white ml-2">Buy It now</button></Link>
               </div>
             </div>
          </div>
          <div className="divider"></div> 
          <BestSeller/>
          </div>
     );
};

export default CartDetails;