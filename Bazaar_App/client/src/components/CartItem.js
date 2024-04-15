import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decreQuantity,
  deleteItem,
  increQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazaar.productData);
  return (
    <div className="xl:w-2/3 pr-10 w-full">
      <div className="w-full m-auto flex justify-center">
        <h2 className="font-titleFont text-2xl font-bold">
          Your Shopping Cart
        </h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-3 mt-6 xl:gap-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed😔 😔 😔 😔 😔`)
                }
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 w-7 h-7 sm:h-5 sm:w-5 md:w-4 lg:w-4 md:h-4 lg:h-4"
              />
              <img
                className="object-cover rounded-lg h-11 w-11 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-32 xl:h-32"
                src={item.image}
                alt="productImage"
              />
            </div>
            <h2 className="xl:w-52 w-5 font-semibol text-xs lg:text-lg mr-3 md:mr-0 font-semibold">
              {item.title}
            </h2>
            <p className="w-7 text-xs md:text-lg font-semibold ml-2 mr-2">₹{item.price}</p>
            <div className="w-30 md:w-52 flex items-center justify-between text-gray-500 gap-2 md:gap-4 border p-3">
              <p className="text-xs md:text-sm">Quantity</p>
              <div className="flex items-center gap-2 text-sm font-semibold md:gap-4">
                <button
                  disabled={item.quantity === 0}
                  onClick={() =>
                    dispatch(
                      decreQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price * 80,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-xs md:text-lg flex items-center justify-center px-1.5 md:px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span className="text-xs md:text-sm">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      increQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price * 80,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-xs md:text-lg flex items-center justify-center px-1.5 md:px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-3.5 md:w-14 text-xs md:text-lg font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart has been reset")
        }
        className="bg-red-600 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 font-bold hover:text-black duration-300 mb-5">
          <span>
            <HiOutlineArrowLeft className="font-bold" />
          </span>
          Go Shopping!!!
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
