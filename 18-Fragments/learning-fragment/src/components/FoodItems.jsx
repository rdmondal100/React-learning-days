import { useState } from "react";
import styles from "./FoodItems.module.css"; //css module import statement
/* eslint-disable react/prop-types */
import Items from "./Items";
// eslint-disable-next-line react/prop-types
const FoodItems = ({ itm }) => {

  let [activeItems, setactiveItems] = useState([]);
 let onBuyButton=(items,event)=>{
  let newItems=[...activeItems,items];
  console.log("Event Print: "+event);
  setactiveItems(newItems);
 }

  return (
    <ul className={`list-group ${styles["rd-items"]}`}>
      {itm.map((items,index) => (
        <Items
          rd={items}
          key={index}
          bought={activeItems.includes(items)}
          handleBuyNowBtn={(event) => onBuyButton(items,event)
          
        
        }
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
