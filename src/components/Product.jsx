import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const{addtocart}=useContext(CartContext)
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-slate-200 h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center  ">
            <Link to={`/product/${id}`}>
            <img
              src={image}
              className="max-h-[160px] group-hover:scale-110 transition duration-300 "
            />
            </Link>
          </div>
          <div className="absolute top-2 -right-11 group-hover:right-2 bg-slate-700 p-2 flex gap-4 justify-center flex-col opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div className="flex justify-center items-center ">
                <GoPlus className="text-xl text-white" onClick={()=>addtocart(product)}/>
              </div>
            </button>
            <Link to={`/product/${id}`} className="w-full flex justify-center ">
              <IoEyeOutline className="text-white text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <h1>{category}</h1>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
