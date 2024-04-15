import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="py-10 w-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-black text-white text-center xl:text-2xl xl:w-80 w-58 text-[18px] py-2">
          Shopping Everday!!
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="xl:max-w-[700px] text-gray-600 text-center text-sm">
          Welcome to our online marketplace, where shopping meets convenience!
          Discover a world of endless possibilities as you explore our curated
          collection of the latest trends and timeless classics. 
          <br />
          <br />
          Indulge in a seamless shopping experience with our user-friendly
          interface, secure payment options, and swift delivery services.
        </p>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products && products.map((item) => 
        <ProductsCard key={item._id} product={item} />
        )}
      </div>
    </div>
  );
};

export default Products;
