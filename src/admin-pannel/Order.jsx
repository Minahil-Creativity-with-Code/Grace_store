import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor } from "react-icons/md";
import { FaUser, FaRegUser, FaPlus } from "react-icons/fa"; // ✅ Fixed import names

const Order = () => {
    return (
        <>
            <div className="admin-panel">
                <aside className="sidebar">
                    <h2>Admin Panel</h2>
                    <nav>
                       <Link to="/dashboard"><MdSpaceDashboard /> Dashboard</Link>
                        <Link to='/products'><AiOutlineProduct /> Products</Link>
                        <Link to="/orders" className="active"><MdBorderColor /> Orders</Link>
                        <Link to='/customer'><FaUser /> Customers</Link>
                        <Link to='/user'><FaRegUser /> User</Link>
                    </nav>
                </aside>

                <div className='orderContent'>
                    <h1>Order</h1>
                    <br />
                    <div>
                        <Link to='/addOrders'>
                            <button className="add-order-button "><FaPlus /> Add Order</button>
                        </Link>
                    </div>
                    <h3>No Order Yet!</h3>
                </div>
            </div>
        </>
    );
};

export default Order;
