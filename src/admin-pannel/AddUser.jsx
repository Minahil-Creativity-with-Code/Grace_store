import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ mode = 'signup' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    profession: '',
    gender: 'male',
    address: '',
    phone: '',
    profileImage: null,
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? files[0] : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      name: formData.name,
      password: formData.password,
      role: formData.role,
      image: formData.profileImage ? formData.profileImage.name : null,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/users', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('✅ User created:', res.data);
      alert('User account created successfully!');

      // Clear the form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        profession: '',
        gender: 'male',
        address: '',
        phone: '',
        profileImage: null,
      });
    } catch (error) {
      console.error('❌ Error creating user:', error.response?.data || error.message);
      alert('Failed to create user.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2 className="title">
          {mode === 'signup' ? 'Sign Up' : 'Edit Profile'}
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="grid">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          {mode === 'signup' && (
            <div className="grid">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Role, Profession, Gender */}
          <div className="grid">
            <div className="field-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>

            <div className="field-group">
              <label>Profession</label>
              <input
                name="profession"
                type="text"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Address & Phone */}
          <div className="grid">
            <input
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Profile Photo */}
          <div className="upload-section">
            <label>Profile Photo</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            {mode === 'signup' ? 'Create Account' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
