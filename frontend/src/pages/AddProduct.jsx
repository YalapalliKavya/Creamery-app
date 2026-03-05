import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/products/add/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Product submitted for approval!");
      setFormData({ name: "", price: "", quantity: "", description: "" });
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Error adding product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
