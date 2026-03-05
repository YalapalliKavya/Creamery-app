import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const FarmerDashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Farmer Selling Dashboard</h1>
        <p>Welcome back, {user.name} 👋</p>
      </div>

      <div className="dashboard-grid">
        
        {/* Add New Product */}
        <div className="dashboard-card">
          <h3>Add New Product</h3>
          <p>List your dairy products for sale.</p>
          <Link to="/add-product">
            <button className="primary">Add Product</button>
          </Link>
        </div>

        {/* My Products */}
        <div className="dashboard-card">
          <h3>My Products</h3>
          <p>View and manage your listed products.</p>
          <Link to="/my-products">
            <button className="primary">Manage Products</button>
          </Link>
        </div>

        {/* Approval Status */}
        <div className="dashboard-card">
          <h3>Approval Status</h3>
          <p>Check admin approval or rejection updates.</p>
          <Link to="/approvals">
            <button className="primary">View Approvals</button>
          </Link>
        </div>

        {/* Orders */}
        <div className="dashboard-card">
          <h3>Orders Received</h3>
          <p>Track customer orders and delivery status.</p>
          <Link to="/farmer-orders">
            <button className="primary">View Orders</button>
          </Link>
        </div>

        {/* Earnings */}
        <div className="dashboard-card">
          <h3>Earnings</h3>
          <p>Monitor your total sales and payments.</p>
          <Link to="/farmer-earnings">
            <button className="primary">View Earnings</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FarmerDashboard;
