import React, { useEffect, useState } from "react";
import { message } from "antd";
import { getproductsById } from "../../ApiCalls/menu";
import { useParams } from "react-router-dom";
import redLine from "../../assets/svg/redLine.svg";
import Divider from "../../components/Divider";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/cartSlice";
import DippingSauce from "./DippingSauce";

const SingleItem = () => {
  const [count, setcount] = useState(0);
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const dispatch = useDispatch();

  const getSinglePRoducts = async () => {
    try {
      const response = await getproductsById(id);
      if (response.success) {
        setproduct(response.data);
      } else {
        throw new Error("products not found");
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleCart = (product) => {
    dispatch(AddToCart(product));
  };

  useEffect(() => {
    getSinglePRoducts();
  }, []);


  return (
    product && (
      <div className="relative h-[1300px]">
        <div className=" relative flex justify-center items-center bg-gray-100">
          <img
            className="h-[600px] w-[700px]"
            src={product.images[0]}
            alt="img/product"
            srcset=""
          />
        </div>

        {/* fotting window */}
        <div className="absolute right-64 top-48 w-96 bg-white rounded-lg shadow-lg">
          <div>
            <img className="w-14 h-9 ml-8" src={redLine} alt="threelines" />
          </div>
          <div className="p-6 ">
            <h1>{product.name}</h1>
            <p className="text-gray-500 mt-5">{product.description}</p>
            <p className="mt-5 ">Colories {product.calories}</p>
            <Divider />
            <div>
              <p className="flex justify-end">OTY</p>
            </div>
            <div className="flex justify-between text-gray-500">
              <p>{product.name}</p>
              <span>1</span>
            </div>
            <p className="mt-5">EXTRA THINGS</p>
            <div className="flex justify-between mt-5 text-gray-500">
              <p>Buffalo Ranch</p> <span>1</span>
            </div>
            <div className="flex justify-between mt-5 text-gray-500">
              <p>KFC Sauce</p> <span>1</span>
            </div>
            <div className="flex justify-between mt-5 text-gray-500">
              <p>Honey BBQ</p> <span>1</span>
            </div>
            <div className="flex justify-between mt-5 text-gray-500">
              <p>Honey Mustard</p> <span>1</span>
            </div>
            <Divider />

            {/* QUANTITY */}
            <div className="flex mt-10">
              <h2>QUANTITY</h2>
              <div className="flex justify-between ml-24 gap-3 text-gray-500">
                <button className="w-8 h-8 text-2xl rounded-2xl border-none  text-gray-500">
                  -
                </button>
                <p className="text-2xl">0</p>
                <button className="w-8 h-8 rounded-2xl border-none text-2xl  text-gray-500">
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              class="mt-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-none w-full h-10 tracking-[2px] text-xl"
              onClick={() => handleCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="w-[600px] ml-28 mt-16">
          <div className="border-l-8 border-r-0 border-t-0 border-b-0 border border-solid border-red-700 p-2 flex justify-between items-center">
            <div>
              <h2>SELECT A DIPPING SAUSE</h2>
              <p className="text-red-600">{count} out of 5 selected</p>
            </div>
            <div>
              <button className="w-24 h-8 rounded-xl border-gray-400 text-gray-500">
                Clear All
              </button>
            </div>
          </div>

          <section>
            <div>
               <DippingSauce/>
            </div>
          </section>
        </div>
      </div>
    )
  );
};

export default SingleItem;
