import React, { useContext  } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
const Sidebar = () => {
  const { isopen, handleClose } = useContext(SidebarContext);
  const { cart ,totalAmount} = useContext(CartContext);

  return (
    <div
      className={`${
        isopen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 min-h-screen h-full shadow-2xl md:w-[45vw] xl:max-w-[36vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div>Shopping Bag</div>
        <div onClick={handleClose}>
          <IoIosArrowRoundForward className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-h-[500px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
      </div>
      <div className="uppercase font-bold py-4">
        total: ${parseFloat(totalAmount).toFixed(2)}
      </div>
      <div className="flex justify-center items-center my-3">
        <button className="w-10/12 py-2 px-8 bg-slate-800 text-white cursor-pointer rounded-lg">Order Confirm </button>
      </div>
    </div>
  );
};

export default Sidebar;
