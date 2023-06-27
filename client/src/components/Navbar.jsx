import { Link } from "react-router-dom";
// import { BsChevronDoubleDown } from "react-icons/lu";
import mainLogo from "../assets/svg/mainLogo.svg";
import findKFC from "../assets/svg/findKFC.svg";
import signin from "../assets/svg/signin.svg";
import cart from "../assets/svg/cart.svg";
import redLine from "../assets/svg/redLine.svg";
import KFClogo from "../assets/svg/KFClogo.svg";
import daiblo from "../assets/png/daiblo.png";
import {useState } from "react";
import { message } from "antd";
import { SetMenu } from "../Redux/menuSlice";
import { useDispatch } from "react-redux";
import { getmenubycategory } from "../ApiCalls/menu";
import { IoLocation } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineDoubleRight } from "react-icons/ai";
import NavbarSecond from "./NavbarSecond";
import { LuUtensilsCrossed } from "react-icons/lu";

export const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const dispatch = useDispatch();
  const handleMenuOptions = () => {
    setVisibleMenu(true);
  };
  const handleMenuOptionsClose = () => {
    setVisibleMenu(false);
  };

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
    <>
      <div className="tb:hidden   w-auto flex flex-col justify-center items-center">
        <div className="w-[80%] lg:w-full">
          {/* logo three lines */}
          <div className=" ">
            <img className="flex items-start w-12 h-8" src={redLine} alt="" />
          </div>
          {/* conatin */}

          <div>
            <div className="flex   h-16 ">
              {/* left side navbar */}
              <div className="flex gap-8 items-center  w-[70%]">
                <Link to="/">
                <img src={mainLogo} alt="" className="w-52" />
                </Link>
                <div className="flex items-center gap-5 ">
                  <Link
                    to={"/menu"}
                    onClick={() => getSearchData("Special Offers")}
                    className="text-black no-underline hover:underline"
                  >
                    <p>Menu</p>
                  </Link>
                  <Link
                    to={"/careers"}
                    className="text-black no-underline hover:underline"
                  >
                    <p>Careers</p>
                  </Link>
                  <Link
                    to={"/about"}
                    className="text-black no-underline hover:underline"
                  >
                    <p>About</p>
                  </Link>
                  <Link
                    to={"/find"}
                    className="text-black no-underline hover:underline"
                  >
                    <div className="flex items-center">
                      <p>Find A KFC </p>{" "}
                      <img
                        height={"10rem"}
                        className="pl-1"
                        src={findKFC}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* right side navbar */}
              <div className="flex items-center gap-4 cursor-pointer">
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-none w-36 h-10 tracking-wide">
                  Start Order
                </button>
                <Link to={"/*"}>
                  <img src={daiblo} alt="" className="w-8 rounded-full" />
                </Link>
                <Link to={"/login"}>
                  <img src={signin} alt="" className="w-8" />
                </Link>
                <Link to={"/cart"}>
                  <img src={cart} alt="" className="w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 w-full bg-slate-900 flex justify-center">
          <Link
            to={"/find"}
            className="flex items-center no-underline text-white"
          >
            <IoLocation size={30} color="red" />
            Start an Order for Pickup or Delivery
          </Link>
        </div>

       
      </div>

      <div className="dt:hidden flex flex-col">
        {/* src={KFClogo}   src={cart} */}
        <div className=" flex justify-between p-4">
          {visibleMenu !== true ?  (<TiThMenu size={33} onClick={()=> setVisibleMenu(true)}/>):(
            <LuUtensilsCrossed size={30} onClick={()=> setVisibleMenu(false)}/>
          )}
          <div className="">
            <img src={KFClogo} alt="" className="w-24" />
          </div>
          <Link to={'/cart'} onClick={()=>setVisibleMenu(false)}>
            <img src={cart} alt="" className="w-9" />
          </Link>
        </div>
        <div className="flex justify-between p-4 bg-black">
          <IoLocation size={25} color="red" />
          <div>
            <Link
              className="no-underline text-white hover:underline"
              to={"/find"}
            >
              Start an Order for Pickup or Delivery
            </Link>
          </div>
          <AiOutlineDoubleRight size={25} color="white" />
        </div>

      </div>

      {visibleMenu && (
         <NavbarSecond setVisibleMenu={setVisibleMenu} visibleMenu={visibleMenu}/>
        )}
    </>
  );
};
