import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addtocart } = useContext(CartContext);

  const Product = products.find((item) => {
    return item.id === parseInt(id);
  });
  const { title, price, description, image } = Product;

  return (
    <section className="pt-32 pb-12 lg:py32 min-h-screen h-full flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="flex flex-1 justify-center items-center mb-8  ">
            <img src={image} className="max-w-[200px] lg:max-w-sm" alt="img" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">
              {title}
            </h1>
            <div className="text-xl">${price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addtocart(Product)} className="bg-slate-800 py-4 px-8 text-white rounded-md">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
