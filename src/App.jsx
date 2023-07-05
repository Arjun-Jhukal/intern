import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./pages/ProductDetail";
// import ProductList from "./pages/ProductList";
const App = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/products/:id" element={<ProductDetail data={product} />} />
      </Routes>
    </Router>
  );
};

export default App;
