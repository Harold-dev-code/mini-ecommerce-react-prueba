import { useCartStore } from '../store/useCartStore';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../App.css'; // Importar los estilos
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function ShoppingCart() {
  const { cartItems, clearCart, checkout } = useCartStore();
  const navigate = useNavigate(); // Hook para navegar

  const handleCheckout = () => {
    checkout(); // Llama a la acción de checkout para limpiar el carrito
    navigate('/thank-you'); // Redirige a la página de agradecimiento
  };

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
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
       <CartSummary />
      <div className="cart-actions">
        {cartItems.length > 0 && (
          <>
            <button onClick={clearCart} className="clear-cart-button">
              Limpiar Carrito
            </button>
            <button onClick={handleCheckout} className="checkout-button">
              Pagar
            </button>
          </>
        )}
      </div>
      
     
    </div>
  );
}

export default ShoppingCart;