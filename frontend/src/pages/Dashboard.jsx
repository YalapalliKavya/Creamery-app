import { useAuth } from "../context/AuthContext";
import FarmerDashboard from "./FarmerDashboard";
import LabDashboard from "./LabDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  if (user.role === "farmer") return <FarmerDashboard />;
  if (user.role === "lab") return <LabDashboard />;

  // ADMIN DASHBOARD
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System overview and platform management</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card admin">
          <h3>Users Management</h3>
          <p>View and manage farmers and lab technicians.</p>
          <button className="primary">Manage Users</button>
        </div>

        <div className="dashboard-card admin">
          <h3>Milk Collection</h3>
          <p>Monitor daily milk collection statistics.</p>
          <button className="primary">View Reports</button>
        </div>

        <div className="dashboard-card admin">
          <h3>Quality Control</h3>
          <p>Track lab approvals and quality issues.</p>
          <button className="primary">Quality Dashboard</button>
        </div>

        <div className="dashboard-card admin">
          <h3>Payments & Revenue</h3>
          <p>Monitor farmer payments and transactions.</p>
          <button className="primary">Finance Panel</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
