import SectionTittle from "../../Sheared/SectionTittle";
import TrendingCategoryCard from "./TrendingCategoryCard";
// image
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";


const TrendingCategorise = () => {
     return (
          <section>
               <SectionTittle header={'Trending Categories'}/>

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-8">
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img1} offer={'33'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img2} offer={'33'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img3} offer={'33'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img4} offer={'33'}/>
               </div>
               
          </section>
     );
};

export default TrendingCategorise;