import SectionTittle from "../../../../Sheared/SectionTittle";
import TrendingCategoryCard from "../../../TrendingCategorise/TrendingCategoryCard";

// image
import img1 from "../../../../assets/img9.webp";
import img2 from "../../../../assets/img10.webp";
import img3 from "../../../../assets/img11.webp";
import img4 from "../../../../assets/img12.webp";

const POLO = () => {
     return (
          <section className="mt-10">
               <SectionTittle header={'Solid POLO'}/>

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-10">
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img1} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img2} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img3} offer={'35'}/>
                    <TrendingCategoryCard tittle={'Round Neck Grey Half Sleeve'} image={img4} offer={'35'}/>
               </div>
               
          </section>
     );
};

export default POLO;