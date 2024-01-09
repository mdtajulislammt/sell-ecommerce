import { Link } from "react-router-dom";

const TrendingCategoryCard = ({image,tittle,offer}) => {
     return (
          <div className=" cursor-pointer">
          <div className="relative">
          <img src={image} alt="" className=" w-full h-80 object-cover" />
          <h2 className=" absolute top-0 right-0 bg-primary-yellow text-primary-blue text-xl font-extrabold p-2 rounded-full w-16 h-16  flex justify-center  -mt-7 -mr-5 uppercase leading-5 pt-3">{offer} <br /> off</h2>
          </div>
          <h2 className=" text-center font-bold text-lg mt-2">{tittle}</h2>
          <Link to={'/'}> <button className=" border-2 w-full p-2 uppercase font-bold my-4 border-primary-yellow">ADD to card</button></Link>
        </div>
     );
};

export default TrendingCategoryCard;