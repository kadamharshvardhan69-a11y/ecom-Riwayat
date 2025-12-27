import { Link } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/add-product">Add Saree</Link>
        <Link to="/admin/orders">Orders</Link>
      </aside>

      <main className="admin-main">
        <h1>Welcome Admin 👑</h1>
        <p>Manage your saree store efficiently</p>
      </main>
    </div>
  );
}

export default AdminDashboard;