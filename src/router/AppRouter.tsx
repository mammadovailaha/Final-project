import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Structure from "../pages/About/Structure";
import Brands from "../pages/About/Brands";
import StaffDetail from "../pages/About/StaffDetail";
import BrandPage from "../pages/About/BrandPage";
import Contact from "../pages/Contact/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/structure" element={<Structure />} />
      <Route path="/about/brands" element={<Brands />} />
      <Route path="/staffDetail/:id" element={<StaffDetail/>}/>
      <Route path="/brandInfo/:id" element={<BrandPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}
