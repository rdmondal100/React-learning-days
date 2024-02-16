import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/CardUi";
import ThemeBtn from "./components/TheamBtn";
import  { ThemeProvider } from "./context/theam";

function App() {
  const [themeMode, setThemeMode ]= useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  //changes in theme

  useEffect(()=>{

   let classList= document.querySelector('html').classList;
   classList.remove("dark","light");
   classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
