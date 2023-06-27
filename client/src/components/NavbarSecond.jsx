import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronDoubleDown } from "react-icons/bs";
import redLine from "../assets/svg/redLine.svg";
import menu1 from "../assets/png/menu1.png";
import menu2 from "../assets/png/menu2.png";
import menu3 from "../assets/png/menu3.png";
import menu4 from "../assets/png/menu4.png";
import mainPick from "../assets/svg/mainPick.svg";
import { message } from "antd";
import { SetMenu } from "../Redux/menuSlice";
import { useDispatch } from "react-redux";
import { getmenubycategory } from "../ApiCalls/menu";

const NavbarSecond = ({ setVisibleMenu, visibleMenu }) => {
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
    <div>
      <div className="" onClick={() => setVisibleMenu(false)}>
        <div className="ml-12 mt-2 w-[40%]">
          <h1 className="font-extrabold">LET'S GET COOKIN'</h1>

          <div>
            <Link
              to={"/login"}
              className="flex items-center mt-3 text-black gap-4"
            >
              Sign In /Sign Up
              <BsArrowRight size={25} />
            </Link>
          </div>
        </div>
        {/* menu start */}
        <div className="flex flex-col gap-1">
          <Link className="no-underline text-black" to={"/menu"}>
            <div
              className="flex justify-between items-center m-12 pl-5 bg-gray-100 h-20"
              onClick={() => getSearchData("Special Offers")}
            >
              <p>MENU</p>
              <img src={menu1} alt="" className=" " />
            </div>
          </Link>

          <Link to={"/careers"} className="no-underline text-black">
            <div className=" flex justify-between items-center m-12 pl-5 bg-gray-100 h-20">
              <p>CAREERS</p>
              <img src={menu2} alt="" className=" " />
            </div>
          </Link>

          <Link to={"/about"} className="no-underline text-black">
            <div className="flex justify-between items-center m-12 pl-5 bg-gray-100 h-20">
              <p>ABOUT</p>
              <img src={menu3} alt="" className=" " />
            </div>
          </Link>

          <Link to={"/find"} className="no-underline text-black">
            <div className="flex justify-between items-center m-12 pl-5 bg-gray-100 h-20">
              <p>FIND A KFC </p>
              <img src={menu4} alt="" className=" " />
            </div>
          </Link>

          <div className="">
            <div className="flex justify-between items-center m-12 pl-5 bg-gray-100 h-14">
              <p>MORE</p>
              <BsChevronDoubleDown size={25} className="pr-6" />
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="flex justify-center">
            <img className="w-24 h-14" src={redLine} alt="threelines" />
          </div>
          <div className="flex flex-col mt-10 ml-6">
            <p
              style={{
                letterSpacing: "2px",
                fontFamily: "fantasy",
                fontWeight: "100",
                fontSize: "30px",
                width: "80%",
                margin: "auto",
              }}
            >
              UNLOCK MORE FINGER LICKIN' GOOD BENEFITS
            </p>
            <p
              style={{
                letterSpacing: "1px",
                fontFamily: "sans-serif,Roboto",
                fontWeight: "500",
                fontSize: "12px",
              }}
              className="pl-48 mt-4"
            >
              Create an account to get access to exclusive deals and faster
              checkout.
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-white font-medium rounded-full text-sm dark:bg-black dark:hover:bg-black dark:focus:ring-white w-40 h-10 border-none mt-10"
              style={{ letterSpacing: "2px" }}
            >
              Sign me up!
            </button>
          </div>
          <div className="flex justify-center">
            <img className="mt-28 w-44" src={mainPick} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
