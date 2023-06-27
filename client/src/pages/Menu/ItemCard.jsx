import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../../Redux/cartSlice";

const ItemCard = () => {
  const { menu } = useSelector((state) => state.menus);
  // console.log("menu",menu);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleCart =(product)=>{
    // console.log("handleCart",product)
    dispatch(AddToCart(product));
  }  

  return (
    <div className="grid gap-4 mb-10 p-4 mobile:grid-cols-1 p-3 tablet:grid-cols-2 p-4 desktop:grid-cols-4 p-4">
      {menu.map((menu) => (
        <div className="h-auto shadow-lg rounded-lg  bg-gray-100" key={menu._id}>
          <div className="h-52">
            <img
              src={menu.images[0]}
              className=" w-full h-full"
              alt=""
              onClick={() => navigate(`/product/${menu._id}`)}
            />
          </div>
          <div className="h-10 p-2">
            <h1 className="text-xl">{menu.name}</h1>
          </div>
          <div className="flex justify-between p-2 items-center">
            <p className="text-sm">Colories {menu.calories}</p>
            <button
             onClick={()=>handleCart(menu)}
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-none w-28 h-10 tracking-wide"
             >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
