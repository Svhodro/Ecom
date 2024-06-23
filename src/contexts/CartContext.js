import React, { createContext,  useEffect,  useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartAmount,setCartamount]=useState(0)
  const [totalAmount,setTotalamount]=useState(0)
  // add to cart function
  const addtocart = (product) => {
    const newproduct = { ...product, amount: 1 }
    
    const ider=cart.find((item)=>item.id===product.id)
    if (ider) {
      const newpro=[...cart].map((item)=>{
        if (item.id===product.id) {
          return {...item,amount:ider.amount+1}
        } else {
          return item
        }
      
      })
      setCart(newpro)
    } else {
      setCart([...cart,newproduct])
    }
         
  }
// remove to cart function
const removecart=(id)=>{
  const newcart=cart.filter((item)=>{
    return item.id !== id
  })
  setCart(newcart)
} 
// handle the amount incriment
const handleplus=(product,id)=>{
addtocart(product)
}
// handle minus 
const handleminus= (product) => {
  const cartItem=cart.find((item)=>{
    return item.id===product.id
  })

  if (cartItem) {
    const newcart=cart.map((item)=>{
      if (item.id===product.id) {
        return {...item,amount:cartItem.amount-1}
      } else {
        return item
      }
    })
    setCart(newcart)
  }
  if (cartItem.amount<2) {
    removecart(product.id)
  }
}
// update the value of amount of cart 
useEffect(()=>{
  if (cart) {
    const amount=cart.reduce((accumulator,currentamount)=>{
      return accumulator+currentamount.amount
    },0)
    setCartamount(amount)
  }
},[cart])

useEffect(()=>{
  if (cart) {
    const amount=cart.reduce((accumulator,currentamount)=>{
      return accumulator+currentamount.price*currentamount.amount
    },0)
    setTotalamount(amount)
  }
},[cart])

  return (
    <CartContext.Provider value={{ totalAmount,cart,cartAmount, addtocart,removecart ,handleplus,handleminus}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
