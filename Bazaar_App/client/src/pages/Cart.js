import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout!");
    }
  };

  const payment = async (token) => {
    try {
      // Convert amount to cents and round to 2 decimal places
      const amountInCents = Math.round(totalAmt * 100);
      
      await axios.post("http://localhost:8000/pay", {
        amount: amountInCents,
        token: token,
      });
      
      console.log("Payment successful");
      toast.success(`₹${(amountInCents / 100).toFixed(2)} has been Paid!`);
    } catch (error) {
      console.error("Payment failed:", error.message);
      toast.error("Payment has been unsuccessful.");
    }
  };
  
  


  if (productData.length !== 0) {
    return (
      <div className="w-full">
        <img
          className="w-full h-60 object-cover"
          src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress"
          alt="cartImage"
        />
        <div className="w-[100vw] mx-auto py-20 grid lg:flex">
          <CartItem />
          <div className="w-full lg:w-1/3 bg-gray-300 py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal
                <span className=" font-titleFont font-bold text-lg">
                  ₹ {totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping
                <span className="text-[0.95rem] text-stone-600">
                  Fast and reliable shipping for trendy clothes, ensuring
                  doorstep delivery within 2-3 business days. Track your fashion
                  journey with our seamless shipping experience.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">₹ {totalAmt}</span>
            </p>
            <button
              onClick={handleCheckOut}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51OnmP9SDS4LGlY7DezfzdlH13snqt0LsAGQUMDnqEvOpNYbGoHM93kIKyKodGITQEnHcC9Gz3JGtJcgJDKB8b6fA00WLv6Qyca"
                  name="Bazaar An Online Shopping Platform"
                  amount={totalAmt * 100}
                  label="Pay to Bazaar"
                  description={`Your Payment total amount is ₹ ${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                  currency="INR"
                />
              </div>
            )}
          </div>
        </div>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
    );
  } else {
    return (
      <div>
        <img
          className="w-full h-60 object-cover"
          src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress"
          alt="cartImage"
        />
        <div className="max-w-screen py-10 flex flex-col items-center justify-center">
          <p className="text-red-600 font-semibold">
            Your Cart is Empty. Please go back to Shopping and add Products to
            the Cart.
          </p>
          <Link to="/">
            <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 font-bold hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft className="font-bold" />
              </span>
              Go Shopping!!!
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Cart;
