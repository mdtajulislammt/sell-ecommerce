import { Link } from "react-router-dom";

const AddToCard = ({image}) => {
     return (
          <div className="  shadow rounded">
          <div className="relative">
          <img src={image} alt="" className=" w-full h-80 object-cover" />
          <h2 className=" absolute bottom-3 left-3  bg-primary-yellow text-primary-blue text-xl font-extrabold p-2 flex justify-center bott uppercase leading-5 pt-3">-40% off</h2>
          </div>
          <h2 className="  font-bold text-lg mt-2 hover:underline duration-300">Tittle</h2>
          <p className=" rounded font-semibold flex items-center gap-4 justify-start"><s className="text-gray-600">$6000</s> <span className=" font-bold">$2000</span></p>
          <Link to={'/CartDetails'}> <button className=" border-2 w-full p-2 uppercase font-bold mt-4 border-primary-yellow hover:border-black hover:text-primary-yellow hover:bg-black duration-200 rounded ">Details</button></Link>
        </div>
     );
};

export default AddToCard;