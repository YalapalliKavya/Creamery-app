import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider
        options={{
          "client-id": "AbX5ISphzjFotAzGlouqi7ITbOxhsJp-uK2jmq-Jyn8pFePnje5vgmU0x-xyD8e_CFCRcGeo9gdVkOzf", // replace with sandbox client ID
          currency: "USD",
          intent: "capture",
        }}
      >
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
);
