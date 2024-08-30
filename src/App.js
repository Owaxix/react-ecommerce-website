import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/Women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route
            path="/TrendyProducts"
            element={<ShopCategory category="accessory" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<loginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
