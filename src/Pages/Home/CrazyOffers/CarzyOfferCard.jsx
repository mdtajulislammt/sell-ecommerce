import { Link } from "react-router-dom";

const CarzyOfferCard = ({image,tittle,offer}) => {
     return (
          <Link to={'/CartDetails'}>
          <div className=" cursor-pointer">
          <div className="relative">
          <img src={image} alt="" className=" w-full h-80 object-cover" />
          <h2 className=" absolute top-0 right-0 bg-primary-yellow text-primary-blue text-xl font-extrabold p-2 rounded-full w-16 h-16  flex justify-center  -mt-7 -mr-5 uppercase leading-5 pt-3">{offer} <br /> off</h2>
          </div>
          <h2 className=" text-center font-bold text-lg mt-2">{tittle}</h2>
        </div>
          </Link>
     );
};

export default CarzyOfferCard;