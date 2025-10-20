import { useCartStore } from '../store/useCartStore';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../App.css'; // Importar los estilos

function ShoppingCart() {
  // 💡 Conexión con Zustand: Solo necesitamos leer la lista de ítems
  const cartItems = useCartStore(state => state.cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Carrito de Compras</h1>
        <p className="cart-empty-message">
          Su carrito está vacío. ¡Explore nuestro catálogo!
        </p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      
      {/* 1. Tabla de Ítems */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* 2. Mapeo: Pasa cada ítem del carrito al componente presentacional CartItem */}
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      
      {/* 3. Resumen de Pago */}
      <CartSummary />
    </div>
  );
}

export default ShoppingCart;