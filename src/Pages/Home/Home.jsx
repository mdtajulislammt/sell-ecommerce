import TrendingCategorise from "../TrendingCategorise/TrendingCategorise";
import Banner from "./Banner/Banner";
import BestSeller from "./BestSeller/BestSeller";
import POLO from "./CategoryProducts/POLO/POLO";
import ContactUs from "./ContactUs/ContactUs";
import CrazyOffers from "./CrazyOffers/CrazyOffers";
import LetestProducts from "./LetestProducts/LetestProducts";

const Home = () => {
     return (
          <div className="md:px-10 px-5">
               <Banner></Banner>
               <CrazyOffers></CrazyOffers>
               <TrendingCategorise/>
               <BestSeller/>
               <LetestProducts/>
               <POLO/>
               <ContactUs/>
          </div>  
     );
};

export default Home;