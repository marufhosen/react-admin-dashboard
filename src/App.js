import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Component/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";

export const dashboardContext = createContext();

function App() {
  const [isToggle, setToggle] = useState(false);
  return (
    <dashboardContext.Provider value={[isToggle, setToggle]}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </dashboardContext.Provider>
  );
}

export default App;
