import ProductCard from "../components/ProductCard";

import milkImg from "../assets/milk.png";
import butterImg from "../assets/butter.jpg";
import paneerImg from "../assets/paneer.jpeg";

const products = [
  { id: 1, name: "Fresh Milk", price: 30, image: milkImg },
  { id: 2, name: "Butter", price: 120, image: butterImg },
  { id: 3, name: "Paneer", price: 200, image: paneerImg },
];

function Products() {
  return (
    <div className="products" style={{ padding: "20px" }}>
      <h2>🧺 Our Dairy Products</h2>

      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
