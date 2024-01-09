import TrendingCategorise from "../TrendingCategorise/TrendingCategorise";
import Banner from "./Banner/Banner";
import BestSeller from "./BestSeller/BestSeller";
import POLO from "./CategoryProducts/POLO/POLO";
import CrazyOffers from "./CrazyOffers/CrazyOffers";

const Home = () => {
     return (
          <div className="md:px-10 px-5">
               <Banner></Banner>
               <CrazyOffers></CrazyOffers>
               <TrendingCategorise/>
               <BestSeller/>
               <POLO/>
          </div>  
     );
};

export default Home;