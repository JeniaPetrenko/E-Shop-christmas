import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import { HomePage } from "./Pages/HomePage";
import { ProductsPage } from "./Pages/ProductsPage";
import "./App.css";
import { ProductDetailsPage } from "./Pages/ProductDetailsPage";

function App() {
  //const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
