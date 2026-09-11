import React from "react";


function ItemForSale({ id, name, brand, quantity, subtotal, tax, availability, deleteItem }) {
    const total = subtotal * quantity + tax

    return (
        <li className="cart-item">
            <div className="item-info">
                <span className="item-name">{name}</span>
                <span className="item-brand">Brand: {brand}</span>
                <span className="item-quantity">Quantity: {quantity}</span>
                <span className="item-subtotal">Subtotal: €{subtotal.toFixed(2)}</span>
                <span className="item-tax">Tax: €{tax.toFixed(2)}</span>
                <span className="item-availability">Availability: {availability}</span>
            </div>
        </li>)
}

export default ItemForSale