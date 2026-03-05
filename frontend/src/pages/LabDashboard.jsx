import { useAuth } from "../context/AuthContext";

const LabDashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Lab Technician Dashboard</h1>
        <p>Welcome, {user.name}</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Pending Samples</h3>
          <p>Milk batches awaiting quality testing.</p>
          <button className="primary">View Samples</button>
        </div>

        <div className="dashboard-card">
          <h3>Quality Testing</h3>
          <p>Enter fat, SNF and quality parameters.</p>
          <button className="primary">Add Results</button>
        </div>

        <div className="dashboard-card">
          <h3>Approvals</h3>
          <p>Approve or reject tested batches.</p>
          <button className="primary">Manage Approvals</button>
        </div>

        <div className="dashboard-card">
          <h3>Reports</h3>
          <p>View and download quality reports.</p>
          <button className="primary">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
