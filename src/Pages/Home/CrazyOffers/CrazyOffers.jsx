import SectionTittle from "../../../Sheared/SectionTittle";
import crazy1 from "../../../assets/crazy1.webp";
import crazy2 from "../../../assets/crazy2.webp";
import crazy3 from "../../../assets/crazy3.webp";
import crazy4 from "../../../assets/crazy4.webp";
import CarzyOfferCard from "./CarzyOfferCard";

const CrazyOffers = () => {
  return (
    <div>
     {/* Crazy Cards */}
      <SectionTittle header={"Crazy Offers!"} />
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-8">
        <CarzyOfferCard image={crazy1} tittle={"Winter Goodness"} offer={'39%'}/>
        <CarzyOfferCard image={crazy2} tittle={"Formal Shirts"} offer={'39%'}/>
        <CarzyOfferCard image={crazy3} tittle={"Upto 60% Love on Selected Variants!"} offer={'39%'}/>
        <CarzyOfferCard image={crazy4} tittle={"Full Sleeve POLO"} offer={'39%'}/>
      </div>
    </div>
  );
};

export default CrazyOffers;
