import SectionTittle from "../../../Sheared/SectionTittle";
import TrendingCategoryCard from "../../TrendingCategorise/TrendingCategoryCard";

// image
import img1 from "../../../assets/img5.webp";
import img2 from "../../../assets/img6.webp";
import img3 from "../../../assets/img7.webp";
import img4 from "../../../assets/img8.webp";

const BestSeller = () => {
     return (
          <section className="mt-10">
               <SectionTittle header={'Our Best Seller'}/>

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-10">
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img1} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img2} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img3} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img4} offer={'35'}/>
               </div>
               
          </section>
     );
};

export default BestSeller;