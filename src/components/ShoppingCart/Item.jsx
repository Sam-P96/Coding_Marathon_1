import React, {useState} from "react";


function Item({ id, name, brand, quantity, subtotal, tax, availability, deleteItem }) {
    const total = subtotal * quantity + tax

    return (
        <li className="cart-item">
            <div className="item-info">
                <span className="item-name">Name: {name}</span>
                <span className="item-brand">Brand: {brand}</span>
                <span className="item-quantity">Quantity: {quantity}</span>
                <span className="item-subtotal">Subtotal: €{subtotal.toFixed(2)}</span>
                <span className="item-tax">Tax: {tax}€</span>
                <span className="item-availability">Availability: {availability}</span>
                <span className="item-total">Total: {total}€</span>
            </div>
            <button className="delete-button" onClick={() => deleteItem(id)}>
                Delete
            </button>
        </li>)
}

export default Item