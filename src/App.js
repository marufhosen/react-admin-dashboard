import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Component/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
