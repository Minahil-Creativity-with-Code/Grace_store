import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor } from "react-icons/md";
import { FaUser, FaRegUser, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'User',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'user@example.com',
    address: 'Lahore, Pakistan',
    image: 'User.jpg'
  },
  {
    name: 'User',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'user@example.com',
    address: 'Lahore, Pakistan',
    image: 'User.jpg'
  },
  {
    name: 'User',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'user@example.com',
    address: 'Lahore, Pakistan',
    image: 'User.jpg'
  },
  {
    name: 'User',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'user@example.com',
    address: 'Lahore, Pakistan',
    image: 'User.jpg'
  }
];

const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to='/dashboard' ><MdSpaceDashboard /> Dashboard</Link></li>
            <li><Link to='/products'><AiOutlineProduct /> Products</Link></li>
            <Link to="/order"><MdBorderColor /> Orders</Link>
            <li><Link to='/customer'><FaUser /> Customers</Link></li>
            <li><Link to='/user' className="active"><FaRegUser /> User</Link></li>
          </ul>
        </nav>
        <div className="support">
          Customer Support<br />
          <Link to='/register'><button>Connect Now</button></Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header>
          <Link to='/addUser'>
            <button className="add-button"><FaPlus /> Add User</button>
          </Link>
          <input type="text" placeholder="Search..." />
          <div className="profile">
            <img src="/PROFILE.jpg" alt="user" />
            <Link to="/userprofile" className="user-route">
              <span>Username</span>
            </Link>
            <small>Fashion Designer</small>
          </div>
        </header>

        <section className="greeting">
          <h1>Dashboard</h1>
        </section>

        <section className="products">
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p><strong>Role:</strong> {product.role}</p>
              <p><strong>Profession:</strong> {product.profession}</p>
              <p><strong>Gender:</strong> {product.gender}</p>
              <p><strong>Email:</strong> {product.email}</p>
              <p><strong>Address:</strong> {product.address}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default User;
