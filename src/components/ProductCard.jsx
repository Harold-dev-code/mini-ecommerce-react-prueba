import { useCartStore } from '../store/useCartStore';

function ProductCard({ product }) {
  // Conexión con Zustand 
  // Obtenemos la acción `addToCart` del store.
  
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = () => {
    // Llama a la acción para agregar el producto al carrito
    addToCart(product);
    console.log(`Máquina ${product.name} agregada al carrito.`);
  };

  return (
    <div className="product-card">
      <img 
        src={`/img/${product.imageUrl}`} 
        alt={product.name} 
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p className="product-card-price">
        {/* Formato de moneda */}
        $ {product.price.toLocaleString('es-CO')} USD
      </p>
      <p className="product-card-description">
        {product.description.substring(0, 80)}...
      </p>
      
      <button 
        onClick={handleAddToCart}
        className="product-card-button"
      >
        Agregar a la Orden
      </button>
    </div>
  );
}

export default ProductCard;