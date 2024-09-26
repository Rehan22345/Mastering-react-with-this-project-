import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getdata() {
      const api = await axios.get("https://66a7a93953c13f22a3d0a020.mockapi.io/products/products");
      setdata(api.data);
    }
    getdata();
  }, []);

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://66a7a93953c13f22a3d0a020.mockapi.io/products/products/${id}`);
      // Update the state to remove the deleted product
      setdata(data.filter((elem) => elem.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">SweetNav</a>
        </div>
        <div>
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/create")}>Create Product</a>
        </div>
      </nav>
      <div className="card-container">
        {data.map((elem, index) => (
          <div className="product-card" key={index}>
            {/* Image */}
            <img className="product-image" src={elem.Image} alt={elem.name} />

            {/* Product Info */}
            <div className="product-info">
              <h2 className="product-name">{elem.name}</h2>
              <p className="product-description">{elem.Description}</p>
            </div>
            <button
              style={{
                backgroundColor: "red",
                padding: "5px",
                border: "none",
                borderRadius: "10px",
              }}
              onClick={() => navigate(`/edit/${elem.id}`)}
            >
              Update Code
            </button>

            <button
           
              onClick={() => handleDelete(elem.id)} // Call delete function
            >
              Delete me
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
