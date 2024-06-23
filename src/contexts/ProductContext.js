import React, { createContext, useEffect, useState } from 'react';

export const ProductContext= createContext()

const ProductProvider = ({children}) => {

const [products,setproduct]=useState([])
const [user,setuser]=useState(false)
const [userdata,setuserdata]=useState()
useEffect(()=>{
  const fatchproduct = async()=>{
    const responce=await fetch('https://fakestoreapi.com/products')
    const data =await responce.json()
    setproduct(data)   
  }
  fatchproduct()
})

  return <ProductContext.Provider value={{products,user,setuser,userdata,setuserdata}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider

