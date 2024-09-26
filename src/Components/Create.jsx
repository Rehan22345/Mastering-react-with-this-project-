
import "../App.css"
import {useNavigate} from "react-router-dom"
import { useState , } from "react"
import  axios from "axios"
const Create = () => {

  const handlesubmit = async(e)=>{
    e.preventDefault();
    const newobj = {name,Description,Image,};
    console.log(newobj)
    const api = await axios.post("https://66a7a93953c13f22a3d0a020.mockapi.io/products/products",newobj);
    console.log(api.data);
   navigate("/")
  }
const  [name, setName] = useState("");
const  [Description, setDescription] = useState("");
const  [Image, setImage] = useState("");


  const navigate = useNavigate();


  return (
    <>
    <nav className="navbar">
    <div className="navbar-brand">
      <a href="/">SweetNav</a>
    </div>
    <div>
      <a onClick={()=>{
          navigate("/")
        }}>Home</a>
      <a>Create Product</a>

    </div>

  </nav>
  <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handlesubmit}>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
          value={name}
          onChange={(event)=>{
            setName(event.target.value)
          }}
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
          required
          value={Image}
          onChange={(event)=>{
            setImage(event.target.value)
          }}
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
          onChange={(event)=>{
            setDescription(event.target.value)

          }}
            id="description"
            name="description"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>


  </>
  )
}

export default Create