
import React, { createContext, useState } from 'react';

export const SidebarContext= createContext()

const SidebarProvider = ({children}) => {

const [isopen,setIsopen]=useState(false)
const handleClose=()=>{
     setIsopen(false)
}

  return <SidebarContext.Provider value={{isopen,setIsopen,handleClose}}>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider