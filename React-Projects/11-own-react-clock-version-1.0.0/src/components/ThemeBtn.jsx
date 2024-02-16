
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
const ThemeBtn =()=>{

 let [theme,setTheme]=useState(false)
  const handleTheamBtn = () => {
   
     setTheme(  document.body.classList.toggle("dark-theme"))



  };
  return <>
  
  <div className="clock__theme" onClick={handleTheamBtn}>
            {theme===true ? (
              <MdOutlineDarkMode></MdOutlineDarkMode>
            ) : (
              <MdLightMode></MdLightMode>
            )}
          </div></>

}

export default ThemeBtn