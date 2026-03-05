import { useCart } from "../context/CartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart" style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
          }}
        >
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total Amount: ₹{total}</h2>

      {/* PayPal Payment */}
      <PayPalButtons
        forceReRender={[total]}
        style={{ layout: "vertical" }}
        createOrder={(data, actions) =>
          actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: total.toString(),
                },
              },
            ],
          })
        }
        onApprove={(data, actions) =>
          actions.order.capture().then(() => {
            alert("🎉 Payment Successful");
            clearCart(); // Clear cart after payment
          })
        }
      />
    </div>
  );
}

export default Cart;
