import { Routes, Route } from "react-router-dom";
import { DASH_BOARD } from "../constants/web-constant";
import { DashBoard } from "../pages/dashboard/dashboard";

export const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<DashBoard />} />
      <Route path={DASH_BOARD} element={<DashBoard />} />
    </Routes>
  );
};

