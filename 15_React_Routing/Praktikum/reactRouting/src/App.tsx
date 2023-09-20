import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createproduct" element={<CreateProduct />}></Route>
      </Routes>
    </Router>
  );
}
