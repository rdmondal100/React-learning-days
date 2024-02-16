import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [currentValue, SetValue] = useState('');

  const handlBtneOnClick = (items) => {
    let newValue=items;
    // console.log(newValue);
    // console.log(typeof(newValue));

    if(items==="C"){
      SetValue("");
    }
    else if(items=="="){
      const result=eval(currentValue);
      SetValue(result);
    }
    else{
      let newExpression=currentValue+newValue;
      console.log(newExpression);
      SetValue(newExpression);

    }
  };

  return (
    <>
      <div id="calculator">
        <Display showExpression={currentValue}></Display>
        <ButtonsContainer handleBtn={handlBtneOnClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
