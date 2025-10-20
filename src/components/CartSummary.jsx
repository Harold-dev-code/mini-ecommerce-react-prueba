import { useCartStore, selectTotal } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

// Componente Presentacional
function CartSummary() {
  // Conexión con Zustand: Obtenemos el selector getTotal y la acción checkout
  const total = useCartStore(selectTotal);
  const checkout = useCartStore(state => state.checkout);
  
  // Hook de React Router para redirigir al usuario
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (parseFloat(total) > 0) {
      checkout(); // Llama a la acción de Zustand para limpiar el carrito.
      navigate('/thank-you'); //Redirige al usuario a la página de agradecimiento.
    } else {
      alert("Su carrito está vacío.");
    }
  };

  return (
    <div className="cart-summary">
      <h3>Resumen del Pedido</h3>
      <div className="cart-summary-total">
        <strong>Total a Pagar (USD):</strong>
        <span className="cart-summary-amount">
          $ {parseFloat(total).toLocaleString('es-CO')}
        </span>
      </div>
      
      {/* Botón de Pagar: Cumple con el RF3: Acción de Pago */}
      <button 
        onClick={handleCheckout} 
        className="cart-summary-button"
        disabled={parseFloat(total) === 0}
      >
        PAGAR ORDEN 
      </button>
    </div>
  );
}

export default CartSummary;