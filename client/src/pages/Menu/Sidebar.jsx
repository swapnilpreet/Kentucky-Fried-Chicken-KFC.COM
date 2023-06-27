import { Link } from "react-router-dom";
import { getmenubycategory } from "../../ApiCalls/menu";
import { message } from "antd";
import { SetMenu } from "../../Redux/menuSlice";
import { useDispatch } from "react-redux";
import {MdOutlineArrowBackIos} from 'react-icons/md'
export const Sidebar = () => {

  const dispatch = useDispatch();


  const getSearchData = async (value) => {
    try {
      const response = await getmenubycategory(value);
      if (response.success) {
        dispatch(SetMenu(response.data));
       } else {
         throw new Error("Product not fiilters");
       }
     } catch (error) {
       message.error(error.message);
     }
   };
  return (
    <div className="sticky left-0">
      <Link to="/" className="flex gap-3 m-7 text-black no-underline">
           <MdOutlineArrowBackIos size={22}/>
            Back
      </Link>
      <div className="cursor-pointer text-lg">
        <p className="m-6 hover:underline"onClick={()=>getSearchData("Special Offers")}>Special Offers</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Combos")}>Combos</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Family Meals")}>Family Meals</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Fried Chicken")}>Fried Chicken</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Nuggets")}>Nuggets</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Sandwiches")}>Sandwiches</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Tenders")}>Tenders</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Potpies&bowls")}>Pot Pies & Bowls</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Kids Meal")}>Kids Meal</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Sidesandaddons")}>Sides & Add Ons</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Desserts")}>Desserts</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Sauces")}>Sauces</p>
        <p className="m-6 hover:underline" onClick={()=>getSearchData("Drinks")}>Drinks</p>
      </div>
    </div>
  );
};