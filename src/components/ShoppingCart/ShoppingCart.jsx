import { useState } from 'react';
import AddShopping from './AddShopping';
import ShoppingTray from './ShoppingTray';

function ShoppingCart() {
  const [form, setForm] = useState([]);

  const handleAddItem = (newItem) => {
    setForm((prev) => [...prev, newItem]);
  };

  const handleRemove = (id) => {
    setForm((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '5px', gap: '30px' }}>
      <AddShopping onAddItem={handleAddItem} />

      {form.map((item) => {
        return <ShoppingTray key={item.id} {...item} onRemove={handleRemove} />;
      })}
    </div>
  );
}

export default ShoppingCart;
