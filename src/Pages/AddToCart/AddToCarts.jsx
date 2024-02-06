// image import
import addImg1 from "../../assets/img1.webp"
import addImg2 from "../../assets/img2.webp"
import addImg3 from "../../assets/img3.webp"
import addImg4 from "../../assets/img4.webp"
import addImg5 from "../../assets/img5.webp"
import addImg6 from "../../assets/img6.webp"
import AddToCard from "./AddToCard";


const AddToCarts = () => {
  return (
    <div className="px-14 my-20">
      <div className=" flex justify-between items-center text-lg text-gray-500 font-bold my-4">

        <div className=" flex items-center justify-start  text-lg gap-5">
          <h3>Filter :</h3>

          <select name="Availability" id="">
          <option value="1">Availability</option>
          <option value="2">Availability</option>
          <option value="3">Availability</option>
          </select>

          <select name="Price" id="">
          <option value="1">Price</option>
          <option value="2">Price</option>
          <option value="3">Price</option>
          </select>

          <select name="Size" id="">
          <option value="1">Size</option>
          <option value="2">Size</option>
          <option value="3">Size</option>
          </select>
        </div>

        <div className="flex items-center justify-start my-4 text-lg gap-5">
        <h3>Sort by :</h3>

<select name="Feature" id="">
<option value="1">Feature</option>
<option value="2">Feature</option>
<option value="3">Feature</option>
</select>

<h2>5 Products</h2>
        </div>
        
      </div>
     <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      <AddToCard image={addImg1}/>
      <AddToCard image={addImg2}/>
      <AddToCard image={addImg3}/>
      <AddToCard image={addImg4}/>
      <AddToCard image={addImg5}/>
      <AddToCard image={addImg6}/>
      
    </div> 
    </div>
    
  );
};

export default AddToCarts;