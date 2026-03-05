import { useEffect, useState } from "react";

export default function AssignedDeliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/deliveries")
      .then((res) => res.json())
      .then((data) => setDeliveries(data))
      .catch((err) => console.error(err));
  }, []);

  const markDelivered = async (id) => {
    await fetch(`http://localhost:5000/api/deliveries/deliver/${id}`, { method: "POST" });
    alert("📦 Delivered!");
    setDeliveries(deliveries.filter((d) => d._id !== id));
  };

  return (
    <div>
      {deliveries.map((order) => (
        <div key={order._id}>
          {order.items.map((i, idx) => (
            <p key={idx}>{i.name} x {i.quantity} = ₹{i.price}</p>
          ))}
          <button onClick={() => markDelivered(order._id)}>Mark Delivered</button>
        </div>
      ))}
    </div>
  );
}
