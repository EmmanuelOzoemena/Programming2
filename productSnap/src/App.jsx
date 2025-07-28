import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header count={count} />
      <Hero count={count} setCount={setCount} />
    </>
  );
}

export default App;
