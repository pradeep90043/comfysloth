import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import CartPage from "./components/CartPage";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import InsidePage from "./components/products/InsidePage";
import Products from "./components/products/Products";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutPage from "./components/CheckoutPage";


function App() {
  const { user } = useAuth0();
  const totalPrice = useSelector((state) => state.cartUpdate.totalPrice )
  const currentProduct = useSelector((state) => state.cartUpdate.currentProduct.SKUid)
  console.log(currentProduct);
  const emptyCartPage = <div className="emptyCartPage" >
             <h1>Your Cart Is Empty</h1>
             <Link to="/products">
<button className="actionBtn" >Fill It</button>
</Link>
  </div>
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={ totalPrice!==0 ?  <CartPage /> : emptyCartPage} />
        <Route exact path= {`/products/${currentProduct}`} element={<InsidePage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
