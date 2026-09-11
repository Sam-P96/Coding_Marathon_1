import React from 'react';

const ShoppingTray = ({ id, Pname, brand, quantity, subtotal, tax, availability, onRemove }) => {
  const total = Number(quantity) * Number(subtotal) + Number(tax);

  return (
    <div
      style={{
        width: 'fit-content',
        alignSelf: 'flex-start',
        border: '1px solid #d1d5db',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Product Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
        }}
      >
        <h1 style={{ fontSize: '16px', color: '#1e3a8a', margin: 0, whiteSpace: 'nowrap' }}>
          {Pname || 'title'}
        </h1>
        <h3 style={{ fontSize: '11px', color: '#64748b', margin: 0, fontWeight: 400 }}>
          {brand || 'Brand'}
        </h3>
      </div>

      {/* Availability */}
      <div
        style={{
          alignSelf: 'flex-start',
          padding: '2px 6px',
          borderRadius: '4px',
          backgroundColor: '#fef3c7',
          color: '#92400e',
          fontSize: '9px',
          fontWeight: '600',
        }}
      >
        {availability}
      </div>

      {/* Information Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content',
          justifyContent: 'space-between',
          columnGap: '16px',
          rowGap: '4px',
          fontSize: '11px',
          fontWeight: '700',
          padding: '8px',
          borderRadius: '6px',
          backgroundColor: '#f8fafc',
          width: '100%',
        }}
      >
        <span>QTY</span>
        <span>{quantity}</span>

        <span>Sub</span>
        <span>€ {subtotal}</span>

        <span>TAX</span>
        <span>€ {tax}</span>
      </div>

      {/* Total */}
      <div
        style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '20px',
        }}
      >
        <span
          style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', whiteSpace: 'nowrap' }}
        >
          TOTAL
        </span>
        <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>€{total}</span>
      </div>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
};

export default ShoppingTray;
