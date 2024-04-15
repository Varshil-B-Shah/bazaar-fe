import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
 var [baseQty, setBaseQty] = useState(1);

  if (details._id === 2) {
    details.title = "Jacket with woollen hat";
  }
  if (details._id === 4) {
    details.title = "Blue jeans";
  }

  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);

  return (
    <div className="max-w-screen-xl mx-auto my-10 flex flex-col sm:flex-row gap-10 sm:items-center">
      <div className="w-full sm:w-2/5 relative">
        <img
          className="w-full h-[550px] object-cover"
          src={details.image}
          alt="productImage"
        />
        <div className="absolute right-0 top-4">
          {details.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-8 py-1 rounded">
              Sale
            </p>
          )}
        </div>
      </div>
      <div className="w-full sm:w-3/5 flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-semibold">{details.title}</h2>
          <div className="flex items-center gap-4 mt-3">
            <p className="line-through text-gray-500 font-base">
              ₹{details.oldPrice * 80}
            </p>
            <p className="text-2xl font-medium text-gray-900">
              ₹{details.price * 80 * baseQty}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-base">
          <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
          <p className="text-xs text-gray-500">(1 Customer Review)</p>
        </div>
        <div className="flex flex-col w-full sm:w-5/5 items-center justify-center gap-7">
          <p className="text-gray-700 -mt-3 font-titleFont font-bold text-base">
            This garment exudes timeless elegance with its classic design and
            sophisticated details. The vibrant colors and unique patterns make
            this piece a standout addition to any wardrobe.
          </p>
          <p className="text-gray-700 -mt-3 font-titleFont font-bold text-base">
            The quality and craftsmanship of this garment truly stand out. I
            love how this piece adds a pop of color to my wardrobe.
          </p>
          <p className="text-gray-700 -mt-3 font-titleFont font-bold text-base">
            The fabric is so soft and breathable, making it a go-to for any
            occasion. This piece is a timeless addition to my collection.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-full sm:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{baseQty}</span>
              <button
                onClick={() => setBaseQty(baseQty + 1)}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: details._id,
                  title: details.title,
                  image: details.image,
                  price: details.price * 80,
                  quantity: baseQty,
                  description: details.description,
                })
              ) &
              toast.success(`${details.title} is added!🥳 🥳 🥳 🥳 🥳`)
            }
            className="bg-black text-white py-3 px-6 active:bg-gray-700"
          >
            add to Cart
          </button>
        </div>
        <p className="text-base text-gray-500">
          Category:{" "}
          <span className="font-medium capitalize">{details.category}</span>
        </p>
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
};

export default Product;
