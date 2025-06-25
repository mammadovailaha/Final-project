import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Structure from "../pages/About/Structure";
import Brands from "../pages/About/Brands";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/structure" element={<Structure />} />
      <Route path="/about/brands" element={<Brands />} />
    </Routes>
  );
}
