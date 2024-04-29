import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Create } from "../pages/Create";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
