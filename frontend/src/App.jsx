import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import AssignedDeliveries from "./pages/AssignedDeliveries";
import FarmerDashboard from "./pages/FarmerDashboard";

function App() {
  const { user } = useAuth(); // get logged-in user

  // Dynamic dashboard based on role
  const DashboardRoute = () => {
    if (!user) return <Dashboard />; // fallback

    switch (user.role) {
      case "delivery":
        return <DeliveryDashboard />;
      case "admin":
        return <AdminDashboard />;
      case "farmer":
        return <FarmerDashboard />; // updated from Cart
      default:
        return <Dashboard />; // default
    }
  };

  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardRoute />
            </ProtectedRoute>
          }
        />

        {/* Farmer cart */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute role="farmer">
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Delivery dashboard */}
        <Route
          path="/delivery-dashboard"
          element={
            <ProtectedRoute role="delivery">
              <DeliveryDashboard />
            </ProtectedRoute>
          }
        />

        {/* Assigned deliveries page */}
        <Route
          path="/assigned-deliveries"
          element={
            <ProtectedRoute role="delivery">
              <AssignedDeliveries />
            </ProtectedRoute>
          }
        />

        {/* Optional: other delivery routes */}
        {/* <Route path="/delivery-history" element={<DeliveryHistory />} /> */}
        {/* <Route path="/delivery-earnings" element={<DeliveryEarnings />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
