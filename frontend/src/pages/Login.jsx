import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // track selected role
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please select a role.");
      return;
    }

    try {
      // Assuming login returns a promise and resolves on success
      const success = await login(email, password, role);

      if (success) {
        // Navigate to the correct dashboard based on role
        if (role === "delivery") {
          navigate("/delivery-dashboard");
        } else if (role === "farmer") {
          navigate("/cart"); // or /dashboard
        } else {
          navigate("/dashboard");
        }
      } else {
        setError("Invalid email, password, or role.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        >
          <option value="">Select Role</option>
          <option value="farmer">Farmer</option>
          <option value="lab">Lab</option>
          <option value="admin">Admin</option>
          <option value="delivery">Delivery</option>
        </select>

        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Test logins:
        <br />
        farmer@test.com
        <br />
        lab@test.com
        <br />
        admin@test.com
        <br />
        delivery@test.com
      </p>
    </div>
  );
}

export default Login;
