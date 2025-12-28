import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200, background: "#222", color: "#fff" }}>
        <h3>Dashboard</h3>
        <Link to="/dashboard">Home</Link><br />
        <Link to="/dashboard/profile">Profile</Link>
      </aside>

      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
