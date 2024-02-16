// import React from 'react';
import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  // let foodItems = ["Chicken", " Dal", " Vegitable", " Milk", "Water", " Beef"];

  let [foodItems, setFoodItems] = useState(["Murgi","Dal"
 
  ]);
  // let foodItems = [];

  // let textStateArr= useState();
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];

  const handleEvent = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value=' ';
      let newItems = [newFoodItems, ...foodItems];
      setFoodItems(newItems);
      console.log(newFoodItems);
      console.log("Value: " + [...foodItems]);
      
    }
  };

  return (
    // <React.Fragment>
    <>
      <Container>
        <h1 className="rd-title d-flex justify-content-center">Healthy Food</h1>
        <FoodInput handleOnChangeEvent={handleEvent}></FoodInput>
        <ErrorMessage itm={foodItems}></ErrorMessage>
        <FoodItems itm={foodItems}></FoodItems>

        {/* </React.Fragment> */}
      </Container>
      {/* <Container>
        <button className="button">Visit Me</button>
      </Container> */}
    </>
  );
}

export default App;
