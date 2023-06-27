import React, { useEffect } from "react";
import redLine from "../../assets/svg/redLine.svg";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../../components/Divider";
import Error from "../../components/Error";
import {Link, useNavigate} from 'react-router-dom'
import {
    ClearCart,
  DecrementCart,
  GetTotals,
  IncrementCart,
  RemoveFromCart,
} from "../../Redux/cartSlice";
import { getpaymentOrder, getpaymentVerify } from "../../ApiCalls/payment";
import { message } from "antd";

const Cart = () => {
  const cart = useSelector((state) => state.cart.product);
  const {cartTotalAmount} = useSelector((state) => state.cart);
  let grandtotal=(cartTotalAmount+1).toFixed(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveItemfromCart = (item) => {
    dispatch(RemoveFromCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(DecrementCart(item));
  };
  const handleIncrement = (item) => {
    dispatch(IncrementCart(item));
  };

  const handleClearCart=()=>{
    dispatch(ClearCart());
  }
  const handlePayment=async(price)=>{
     const amount=Number(price);
     const _data={amount:amount}
    try {
      const response = await getpaymentOrder(_data);
      if (response.success) {
        // console.log(response.data)
         handleOpenRazorpay(response.data)
       } else {
         throw new Error("Product not fiilters");
       }
     } catch (error) {
       message.error(error.message);
     }
  }

  const handleOpenRazorpay=(data)=>{
      const options={
          key:'rzp_test_93GbPzDVgg9zAW',
          amount:data.amount,
          currency:data.currency,
          order_id:data.id,
          name:"Kentucky Fried Chicken",
          description:"security",
          image:"https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png",
          handler:function(response){
           

            const handlePaymentverify=async(response)=>{
              const _data={response:response}
             try {
               const response = await getpaymentVerify(_data);
                 console.log(response)
                 navigate('/menu')
                 message.success(response.data.message)
                handleClearCart()
              } catch (error) {
                message.error(error.message);
              }
           }
           handlePaymentverify(response);
           },
          theme: {
            "color": "#3399cc"
          }
      };
      const rzp =new window.Razorpay(options)
      rzp.open()
  }

  useEffect(()=>{
     dispatch(GetTotals())
  },[cart])


  return (
    <>
      <div className="">
        <div>
          <img className="w-20 h-10 ml-60" src={redLine} alt="" />
          <h1 className="ml-64 mt-5">MY BAG</h1>
        </div>
        {cart.length !== 0 ? (<button className="ml-60 mt-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-none w-32 h-10 tracking-[2px] text-xl" onClick={()=>handleClearCart()}>clear Cart</button>):("")}

        {cart.length !== 0 ? (
          <div className=" mt-20 flex justify-center gap-8 ">
            <div className="overflow-auto h-[650px]">
              {cart?.map((item) => (
                <div className="flex justify-center gap-6 mt-4">
                  <div className="shadow-lg rounded-lg w-[700px] flex gap-1 justify-between">
                    <div className="flex">
                      <div className="w-44 h-44">
                        <img
                          src="https://digitaleat.kfc.com/menus/image/bare/kfc-new8pcTenders-OnlineDeal?q=75&w=1280"
                          alt=""
                          className="w-full h-full"
                        />
                      </div>

                      <div className="mt-4">
                        <p className="pt-2">{item.name}</p>
                        <p className="pt-2 text-gray-600">
                          Category {item.category}
                        </p>
                        <p className="pt-2 text-gray-600">
                          style Original Recipe
                        </p>
                        <div className="flex gap-4">
                          <Link className="mt-6 text-gray-500" to='/menu'>Edit</Link>
                          <br />
                          <Link
                            className="mt-6"
                            onClick={() => handleRemoveItemfromCart(item)}
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-40">
                      <div className="flex items-center">
                        <button
                          className="w-10 h-9"
                          onClick={() => handleDecrement(item)}
                          disabled={item.cartQuantity === 1 ? true : false}
                        >
                          -
                        </button>
                        <span>{item.cartQuantity}</span>
                        <button
                          className="w-10 h-9"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center ml-7 text-gray-600">
                        <p>${item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
           <div className="shadow-lg w-[400px] h-[500px]">
              <div className="m-6">
                <div>
                  <h2>{cart.length} ITEM</h2>
                  <br />
                  <Divider />
                  <div className="text-gray-500 mt-12">
                    <p>Need plates and/or utensils?</p>
                  </div>
                  <br />
                  <Divider />
                  <div className="flex justify-between text-gray-500 mt-16">
                    <p>Subtotal</p>
                    <span className="text-green-400">$ {cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 mt-5">
                    <p>Tax</p>
                    <span className="text-red-400">$ {1}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 mt-5">
                    <p>Estimated Total</p>
                    <span className="text-green-400">$ {grandtotal}</span>
                  </div>
                  <Divider />
                  <button
                  onClick={()=> handlePayment(grandtotal)}
                    type="button"
                    className="mt-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-none w-full h-10 tracking-[2px] text-xl"
                  >
                    Checkout <span className="ml-20">$ {grandtotal}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <>
            <Error value={"please add product to cart"} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
