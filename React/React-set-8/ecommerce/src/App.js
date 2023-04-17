import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsListPage from "./Pages/ProductsListPage";
import CartPage from "./Pages/CartPage";
import WishListPage from "./Pages/WishListPage";
import Error from "./Components/Error";
import ProductDetailPage from "./Pages/ProductDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsListPage />} />
        <Route path="/product/:ProductId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
