import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");

  // Fetch product data when the component mounts
  useEffect(() => {
    const editdata = async () => {
      const api = await axios.get(`https://66a7a93953c13f22a3d0a020.mockapi.io/products/products/${id}`);
      setName(api.data.name);
      setDescription(api.data.Description);
      setImage(api.data.Image);
    };

    editdata();
  }, [id]); // Dependency array ensures this runs only when id changes

  const handlesubmit = async (e) => {
    e.preventDefault();
    const valueapi = await axios.put(`https://66a7a93953c13f22a3d0a020.mockapi.io/products/products/${id}`, { name, Description, Image });
    console.log(valueapi);
    navigate("/"); // Redirect after successful update
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">SweetNav</a>
        </div>
        <div>
          <a onClick={() => navigate("/")}>Home</a>
          <a>Create Product</a>
        </div>
      </nav>
      <div className="product-form-container">
        <h2>Edit Product</h2>
        <form onSubmit={handlesubmit}>
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)} // Correctly update state
              required
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Image */}
          <div className="form-group">
            <label htmlFor="productImage">Product Image</label>
            <input
              onChange={(e) => setImage(e.target.files[0])} // Handle file input correctly
              type="file"
              id="productImage"
              name="productImage"
              accept="image/*"
            />
          </div>

          {/* Product Description */}
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              required
              value={Description}
              onChange={(e) => setDescription(e.target.value)} // Correctly update state
              id="description"
              name="description"
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
