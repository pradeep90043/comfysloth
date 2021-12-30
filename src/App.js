import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import CartPage from "./components/CartPage";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<CartPage />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
