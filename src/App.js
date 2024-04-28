import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./component/Home";
import { createContext, useState } from "react";

export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
      </cartContext.Provider>
  );
}

export default App;
