import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Products from "./pages/CategoryPage";
import Nopage from "./components/Nopage";
import Services from "./components/Services";
import SingleProduct from "./pages/ProductPage";
import BodySection from "./pages/LandingPage";
import Cart from "./pages/CartPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<BodySection />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="singleproduct/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
