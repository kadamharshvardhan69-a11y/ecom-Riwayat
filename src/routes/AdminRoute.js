import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const isAdmin = true; // later replace with auth logic

  return isAdmin ? children : <Navigate to="/" />;
}

export default AdminRoute;
