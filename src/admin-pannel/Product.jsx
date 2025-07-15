// AdminProductPanel.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaPlus, FaRegUser } from 'react-icons/fa';
import { MdDelete, MdSpaceDashboard, MdBorderColor } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';  // or any other valid icon

const products = [
  { id: 1, image: '/Ad1.jpg', category: 'Summer Collection 2025', price: 250, stock: true },
  { id: 2, image: '/Ad2.jpg', category: 'Winter Collection 2025', price: 180, stock: false },
  { id: 3, image: '/Ad3.jpg', category: 'Gents', price: 120, stock: true },
  { id: 4, image: '/Ad4.jpg', category: 'Party Wear', price: 280, stock: true },
  { id: 5, image: '/B1.jpg', category: 'Home Decor', price: 200, stock: true },
];

function AdminProductPanel() {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <Link to="/dashboard"><MdSpaceDashboard /> Dashboard</Link>
          <Link to="/products" className="active"><AiOutlineProduct /> Products</Link>
          <Link to="/order"><MdBorderColor /> Orders</Link>
          <Link to="/customer"><FaUserFriends /> Customers</Link>
          <Link to="/user"><FaRegUser /> Users</Link>
        </nav>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1>Products</h1>
          <Link to="/addproduct">
            <button className="add-button"><FaPlus /> Add Product</button>
          </Link>
        </div>

        <div className="filters">
          <input type="text" placeholder="Search products" />
          <select><option>Category</option></select>
          <select><option>Price</option></select>
          <select><option>Quantity in Stock</option></select>
        </div>

        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity in Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="product-info">
                  <img src={product.image} alt={product.category} />
                  <span>{product.category}</span>
                </td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <span className={product.stock ? 'in-stock' : 'out-stock'}>
                    {product.stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="actions">
                  <button><FaEdit /> Edit</button>
                  <button><MdDelete /> Delete</button>
                  <button><FaEye /> View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminProductPanel;
