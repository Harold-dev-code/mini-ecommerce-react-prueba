import { useCartStore, selectTotal } from '../store/useCartStore';

// Componente Presentacional
function CartSummary() {
  // Conexión con Zustand: Obtenemos el selector getTotal
  const total = useCartStore(selectTotal);

  return (
    <div className="cart-summary">
      <h3>Resumen del Pedido</h3>
      <div className="cart-summary-total">
        <strong>Total a Pagar (USD):</strong>
        <span className="cart-summary-amount">
          $ {parseFloat(total).toLocaleString('es-CO')}
        </span>
      </div>
    </div>
  );
}

export default CartSummary;