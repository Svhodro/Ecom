import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShopping } from "react-icons/ai";
import logo from '../img/logo.svg'
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  // cartAmount
  const navigate = useNavigate();
  const notify = () => toast("Logout Sucsesfull!");
  const data=localStorage.getItem('userData')
  const { cartAmount } = useContext(CartContext);
  const { setIsopen, isopen } = useContext(SidebarContext);
  const [isactive,setisactive]=useState(false)
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    window.scrollY > 60 ? setisactive(true):setisactive(false)
   })
  })
  const handlelogout=()=>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
     notify()
     localStorage.clear()
     navigate('/login')

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
    <div className={`${isactive?' py-2 shadow-md bg-white':'bg-white py-3 '} fixed w-full flex justify-between px-4 z-20 `}>
      <div>
        <Link to='/'>
        <img src={logo} alt="img" className="w-10"/>
        </Link>
      </div>
      <div className="flex justify-center gap-2 items-center">
      <div
        onClick={() => {
          setIsopen(!isopen);
        }}
      >
        {data?<FiLogOut className="text-3xl cursor-pointer" onClick={handlelogout}/>:<div></div>}
        
             
        <div className="w-6 bg-slate-900 text-white rounded-full text-center absolute right-3 top-8 ">{cartAmount}</div>

      </div>
      <AiOutlineShopping className="text-4xl cursor-pointer" />  
      </div>
    
      
    </div>
    <ToastContainer />
    </div>
  );
};

export default Header;
