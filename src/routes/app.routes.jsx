import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
