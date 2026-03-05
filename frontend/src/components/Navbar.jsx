import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {user?.role === "farmer" && (
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        )}
      </div>

      <div>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
