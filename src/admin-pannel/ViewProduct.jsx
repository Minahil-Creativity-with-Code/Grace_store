import React, { useState } from 'react';
const ViewProduct = () => {
  const product = {
    name: 'T Shirt Red',
    price: 111,
    inStock: true,
    ratings: 3,
    reviews: 1,
    image: '/P1.jpg', // ✅ Only one main image
    shortDescription: 'Add a fresh and vibrant touch to your casual wardrobe with this stylish t-shirt. Team it with a pair of black jeans and flip-flops or shoe for a cool look.',
    longDescription: `Type Round neck Sleeve Half Sleeve Fit Slim Fabric Cotton Pack of 1 Style T Shirt Red Neck Type Round neck Ideal For Women's Size S Suitable For Women Wear Brand Fit Slim Sleeve Type Narrow Reversible No Fabric Care Do not iron on print/embroidery/embellishment`,
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="view-product-wrapper">
      <div className="view-product">
        {/* LEFT SIDE: Single Main Image */}
        <div className="main-image-only">
          <img src={product.image} alt="Product" />
        </div>

        {/* RIGHT SIDE: Product Info */}
        <div className="product-details">
          <h2>{product.name}</h2>
          <div className="ratings">
            {'★'.repeat(product.ratings)}{'☆'.repeat(5 - product.ratings)} &nbsp;
            <span>{product.ratings} Ratings & {product.reviews} Reviews</span>
          </div>
          <p className="price">${product.price}</p>
          <p className={`stock ${product.inStock ? 'in-stock' : 'out-stock'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          <p className="short-desc">{product.shortDescription}</p>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <div className="expandable-description">
            <h4>Description</h4>
            <p>{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
