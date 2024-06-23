import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ product }) => {
  const { id, title, image, price, amount } = product;
 const {removecart,handleplus,handleminus}= useContext(CartContext)
  return (
    <div className="flex ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/* image div  */}
        <div>
          <Link to={`/product/${id}`}>
            <img src={image} className="max-w-[80px]" alt="img" />
          </Link>
        </div>
        {/* text and other */}
        <div  className=" w-full">
          {/* title there */}
        <div className="flex justify-between items-center w-full px-1">
          <Link to={`/product/${id}`}>
            <h1 className="text-base sm:text-sm uppercase hover:underline">{title}</h1>
          </Link>
          {/* close button */}
           <div onClick={()=>removecart(id)}>
           <IoIosClose  className="text-2xl cursor-pointer hover:text-red-600 hover:font-bold"/>
           </div>
        </div>
        {/* lower part in title */}
        <div className="flex items-center justify-between gap-3 ">
          {/* incrice and decrice button */}
        <div className="inline-flex items-center mt-2">
            <button
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" onClick={()=>handleplus(product,id)}>
               <GoPlus />
            </button>
            <div
                className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-3  select-none">
                {amount}            </div>
            <button
                className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" onClick={()=>handleminus(product)}>
               <FiMinus />
            </button>
        </div>
        {/* price */}
        <div className=" text-slate-400">
          ${price}
        </div>
        <div>
          ${price * amount}
        </div>
        </div>
       
        </div>
      
        
      </div>

    </div>
  );
};

export default CartItem;
