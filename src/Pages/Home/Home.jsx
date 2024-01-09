import TrendingCategorise from "../TrendingCategorise/TrendingCategorise";
import Banner from "./Banner/Banner";
import CrazyOffers from "./CrazyOffers/CrazyOffers";

const Home = () => {
     return (
          <div className="md:px-10 px-5">
               <Banner></Banner>
               <CrazyOffers></CrazyOffers>
               <TrendingCategorise/>
          </div>  
     );
};

export default Home;