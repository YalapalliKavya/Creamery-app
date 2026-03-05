import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const DeliveryDashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <div className="dashboard-header">
        <h1>Delivery Dashboard</h1>
        <p>Welcome back, {user.name} 👋</p>
      </div>

      <div
        className="dashboard-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Assigned Deliveries */}
        <div className="dashboard-card">
          <h3>Assigned Deliveries</h3>
          <p>View your current delivery tasks and details.</p>
          <Link to="/assigned-deliveries">
            <button className="primary">View Deliveries</button>
          </Link>
        </div>

        {/* Delivery History */}
        <div className="dashboard-card">
          <h3>Delivery History</h3>
          <p>Check all completed deliveries and statuses.</p>
          <Link to="/delivery-history">
            <button className="primary">View History</button>
          </Link>
        </div>

        {/* Pending Orders */}
        <div className="dashboard-card">
          <h3>Pending Orders</h3>
          <p>See orders waiting for pickup or delivery.</p>
          <Link to="/pending-orders">
            <button className="primary">View Orders</button>
          </Link>
        </div>

        {/* Notifications */}
        <div className="dashboard-card">
          <h3>Notifications</h3>
          <p>Receive updates from admin or customers.</p>
          <Link to="/delivery-notifications">
            <button className="primary">View Notifications</button>
          </Link>
        </div>

        {/* Earnings */}
        <div className="dashboard-card">
          <h3>Earnings</h3>
          <p>Monitor your total earnings from deliveries.</p>
          <Link to="/delivery-earnings">
            <button className="primary">View Earnings</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
