import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    brand: '',
    color: '',
    size: '',
    productImage: null,
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? files[0] : value;
    setProductData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: productData.title,
      prices: {
        small: parseFloat(productData.price) - 2,
        medium: parseFloat(productData.price),
        large: parseFloat(productData.price) + 2
      },
      stockQuantity: parseInt(productData.stock),
      category: productData.category,
      description: productData.description,
      image: "tshirt.jpg", // Static for now
      isCustomizable: true,
      CustomizationDescription: "Upload your design or add text"
    };

    try {
      const response = await axios.post('http://localhost:5000/api/products', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('✅ Product added:', response.data);
      alert('Product added successfully!');

      // ✅ Clear the form after successful submission
      setProductData({
        title: '',
        description: '',
        category: '',
        price: '',
        stock: '',
        brand: '',
        color: '',
        size: '',
        productImage: null,
      });
    } catch (error) {
      console.error('❌ Error adding product:', error.response?.data || error.message);
      alert('Something went wrong while adding the product.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2 className="title">Add Product</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Title & Category */}
          <div className="grid">
            <input
              name="title"
              type="text"
              placeholder="Product Title"
              value={productData.title}
              onChange={handleChange}
              required
            />
            <input
              name="category"
              type="text"
              placeholder="Category"
              value={productData.category}
              onChange={handleChange}
              required
            />
          </div>

          {/* Brand & Color */}
          <div className="grid">
            <input
              name="brand"
              type="text"
              placeholder="Brand"
              value={productData.brand}
              onChange={handleChange}
            />
            <input
              name="color"
              type="text"
              placeholder="Color"
              value={productData.color}
              onChange={handleChange}
            />
          </div>

          {/* Size & Stock */}
          <div className="grid">
            <input
              name="size"
              type="text"
              placeholder="Size (e.g. S, M, L, XL)"
              value={productData.size}
              onChange={handleChange}
            />
            <input
              name="stock"
              type="number"
              placeholder="Stock Quantity"
              value={productData.stock}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="grid">
            <input
              name="price"
              type="number"
              placeholder="Price (e.g. 49.99)"
              value={productData.price}
              onChange={handleChange}
              required
            />
            <div></div> {/* Keep grid alignment */}
          </div>

          {/* Description */}
          <textarea
            name="description"
            rows="4"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>

          {/* Image Upload */}
          <div className="upload-section">
            <label>Product Image</label>
            <input
              type="file"
              name="productImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
