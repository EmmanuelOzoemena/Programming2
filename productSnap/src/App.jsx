import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0); 

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <Hero cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}

export default App;
