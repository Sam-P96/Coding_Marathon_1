import React, { useState } from 'react';
import './ShoppingCart.css';
let nextId = 1;
const AddShopping = ({ onAddItem }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(name, value);
  };

  const onSubmit = () => {
    const newCart = {
      id: nextId++,
      Pname: formData.Pname,
      brand: formData.brand,
      quantity: formData.quantity,
      subtotal: formData.subtotal,
      tax: formData.tax,
      availability: formData.availability,
    };
    onAddItem(newCart);
    setFormData({});
  };

  return (
    <div className="shopping-form">
      <h1 className="shopping-form__title">Shopping cart</h1>

      <div className="shopping-form__inputs">
        <input
          label="Pname"
          type="text"
          name="Pname"
          placeholder="Enter Name"
          value={formData.Pname || ''}
          onChange={handleChange}
          className="shopping-form__input"
        />
        <input
          label="brand"
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand || ''}
          onChange={handleChange}
          className="shopping-form__input"
        />
        <input
          label="quantity"
          type="number"
          name="quantity"
          placeholder="Enter quantity "
          value={formData.quantity || ''}
          onChange={handleChange}
          className="shopping-form__input"
        />
        <input
          type="number"
          name="subtotal"
          placeholder="Enter subtotal"
          value={formData.subtotal || ''}
          onChange={handleChange}
          className="shopping-form__input"
        />
        <input
          type="number"
          name="tax"
          placeholder="Enter tax"
          value={formData.tax || ''}
          onChange={handleChange}
          className="shopping-form__input"
        />
        <select
          id="availability"
          name="availability"
          required
          value={formData.availability || ''}
          onChange={handleChange}
          className="shopping-form__input"
        >
          <option value="">Select Availability</option>
          <option>N/A</option>
          <option>In stock</option>
          <option>In low stock</option>
          <option>Arriving soon</option>
        </select>
      </div>
      <button onClick={onSubmit} className="shopping-form__button">
        Add to the cart
      </button>
    </div>
  );
};

export default AddShopping;
