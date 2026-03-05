import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Creamery Management Platform</h1>
          <p>
            End-to-end dairy management system for farmers, lab technicians, and
            administrators. Track quality, manage products, and ensure trusted
            dairy supply.
          </p>

          <div className="home-actions">
            <Link to="/products">
              <button className="primary">View Products</button>
            </Link>

            {!user ? (
              <Link to="/login">
                <button className="outline">Login</button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <button className="outline">Go to Dashboard</button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="home-section">
        <h2>Why Creamery?</h2>

        <div className="home-grid">
          <div className="home-card">
            <h3>Farmer Management</h3>
            <p>
              Farmers can submit milk data, track approvals, and receive
              transparent payments without intermediaries.
            </p>
          </div>

          <div className="home-card">
            <h3>Quality Control</h3>
            <p>
              Lab technicians test milk batches, maintain quality standards, and
              ensure regulatory compliance.
            </p>
          </div>

          <div className="home-card">
            <h3>Product Sales</h3>
            <p>
              Sell quality-tested dairy products directly through a secure
              ordering and payment system.
            </p>
          </div>

          <div className="home-card">
            <h3>Centralized Dashboard</h3>
            <p>
              Administrators oversee operations, manage users, and monitor
              system performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Built for modern dairy operations</h2>
        <p>Reliable, scalable, and easy to use.</p>

        {!user && (
          <Link to="/login">
            <button className="primary">Get Started</button>
          </Link>
        )}
      </section>
    </>
  );
};

export default Home;
