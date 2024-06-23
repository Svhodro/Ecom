import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate=useNavigate()
  const { products } = useContext(ProductContext);
  const data=localStorage.getItem('userData')
  if (data) {
    return (
      <div>
        <Hero/>
        
        
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"> 
              {
          products.map((data)=>{
            return <Product product={data} key={data.id}/>
          
          })
        }
            </div>
          </div>
        </section>
       
      </div>
    );
  }else{
    navigate('/login')
  }

 
}

export default Home;
