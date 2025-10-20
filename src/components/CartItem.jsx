import { useCartStore } from '../store/useCartStore';

// Componente Presentacional
// Recibe un solo 'item' del carrito (product + quantity) como props.
function CartItem({ item }) {
  // Conexión con Zustand:
  // Extrae la función de actualizar cantidad (referencia estable)
  const updateQuantity = useCartStore(state => state.updateQuantity); 
  // Extrae la función de eliminar producto (referencia estable)
  const removeFromCart = useCartStore(state => state.removeFromCart);

  const handleUpdateQuantity = (change) => {
    // Calcula la nueva cantidad. Math.max(0, ...) asegura que no sea negativo.
    const newQuantity = Math.max(0, item.quantity + change);
    
    if (newQuantity === 0) {
      // Si la cantidad llega a 0, llamamos a la acción de ELIMINAR para limpiar.
      removeFromCart(item.id);
    } else {
      // Si es > 0, simplemente actualizamos la cantidad.
      updateQuantity(item.id, newQuantity);
    }
  };

  const itemSubtotal = (item.price * item.quantity).toFixed(2);

  return (
    <tr>
      {/* Nombre del Producto */}
      <td className="cart-item-cell">{item.name}</td>
      
      {/* Precio Unitario */}
      <td className="cart-item-cell">$ {item.price.toLocaleString('es-CO')}</td>
      
      {/* Cantidad Editable */}
      <td className="cart-item-cell">
        <button className="cart-item-button" onClick={() => handleUpdateQuantity(-1)}>-</button>
        <input 
          type="number" 
          value={item.quantity} 
          min="1"
          className="cart-item-quantity-input"
          // Permitir la edición directa del campo
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
        />
        <button className="cart-item-button" onClick={() => handleUpdateQuantity(1)}>+</button>
      </td>
      
      {/* Subtotal del Ítem */}
      <td className="cart-item-cell cart-item-subtotal">$ {parseFloat(itemSubtotal).toLocaleString('es-CO')}</td>
      
      {/* Botón de Eliminar */}
      <td className="cart-item-cell">
        <button 
          className="cart-item-button remove"
          onClick={() => removeFromCart(item.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default CartItem;