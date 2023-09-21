import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
