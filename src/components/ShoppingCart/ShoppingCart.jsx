import Item from "./Item";
import ItemForSale from "./ItemForSale"
import React, { useState } from "react";


function ShoppingCart() {
  const [cartItems, setCartItems] = useState([])
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [subtotal, setSubtotal] = useState("")
  const [tax, setTax] = useState("")
  const [availability, setAvailability] = useState("Available");

  const availableItems = [
    {
      name: "Pasta",
      brand: "Barilla",
      quantity: 1,
      subtotal: 3.5,
      tax: 1,
      availability: "In stock"
    },
    {
      name: "Cheese",
      brand: "Valio",
      quantity: 1,
      subtotal: 6.9,
      tax: 1,
      availability: "In stock"
    },
    {
      name: "Honey",
      brand: "Hunajainen Sato",
      quantity: 1,
      subtotal: 5.4,
      tax: 1,
      availability: "Out of stock"
    },
    {
      name: "Soda",
      brand: "Coca-Cola",
      quantity: 2,
      subtotal: 12,
      tax: 1,
      availability: "In stock"
    },
  ]


  function addItem(item) {
    setCartItems((c) => [...c, { ...item}])
  }

  function deleteItem(id) {
    setCartItems((c) => c.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>Add Item</h2>
      {availableItems.map((item, index) => (
                <div key={index}>
          <ItemForSale
            name={item.name}
            brand={item.brand}
            quantity={item.quantity}
            subtotal={item.subtotal}
            tax={item.tax}
            availability={item.availability}
          />
          <button onClick={() => addItem(item)}>Add to Cart</button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul className="cart-list">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            quantity={item.quantity}
            subtotal={item.subtotal}
            tax={item.tax}
            availability={item.availability}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingCart