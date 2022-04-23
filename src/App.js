import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Component/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Analytics from "./Pages/Analytics";
import AdminForm from "./Pages/AdminForm";
import Calender from "./Pages/Calender";

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
            <Route path="/customers" element={<Customers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/form" element={<AdminForm />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </dashboardContext.Provider>
  );
}

export default App;
