import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../features/dashboard/Home";
import Profile from "../features/dashboard/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
