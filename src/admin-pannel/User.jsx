import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor } from "react-icons/md";
import { FaUser, FaRegUser, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const users = [
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
    name: 'Areeba',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'areeba@example.com',
    address: 'Karachi, Pakistan',
    image: 'User.jpg'
  },
  {
    name: 'Zoya',
    role: 'Manager',
    profession: 'Stylist',
    gender: 'Female',
    email: 'zoya@example.com',
    address: 'Islamabad, Pakistan',
    image: 'User.jpg'
  },
  {
    name: 'Sana',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'sana@example.com',
    address: 'Lahore, Pakistan',
    image: 'User.jpg'
  }
];

const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <li><Link to='/dashboard'><MdSpaceDashboard /> Dashboard</Link></li>
            <li><Link to='/products'><AiOutlineProduct /> Products</Link></li>
            <li><Link to='/order'><MdBorderColor /> Orders</Link></li>
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
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <Link to = '/viewUser' className='user-route'><div key={index} className="product">
                <img src={user.image} alt={user.name} />
                <h4>{user.name}</h4>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Profession:</strong> {user.profession}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
              </div></Link>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default User;
