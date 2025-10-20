import { create } from 'zustand';
// ---------------------------------------------
// Lógica de Persistencia (localStorage)(RF4)
// ---------------------------------------------
// Función para cargar el estado inicial del carrito desde el navegador
const getInitialState = () => {
  try {
    const storedCart = localStorage.getItem('ferrero_ecommerce_cart');
    // Si existe, lo devuelve parseado.
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    // Si hay un error (ej. JSON corrupto), se inicia con carrito vacío.
    console.error("Error al cargar el carrito de localStorage:", error);
    return [];
  }
};

// Función para guardar el estado en localStorage después de cada cambio(RF4)
const updateLocalStorage = (cart) => {
  localStorage.setItem('ferrero_ecommerce_cart', JSON.stringify(cart));
};

// ---------------------------------------------
// Creación del Store principal de Zustand
// ---------------------------------------------


export const useCartStore = create((set, get) => ({
  // Estado: Array que contendrá los items del carrito
  cartItems: getInitialState(),

  // AÑADIR/INCREMENTAR un producto
  addToCart: (product) => {
    const { cartItems } = get();
    const itemIndex = cartItems.findIndex(item => item.id === product.id);

    let newCartItems;

    if (itemIndex > -1) {
      // El producto existe: Se incrementa la cantidad
      newCartItems = cartItems.map((item, index) =>
        index === itemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // El producto es nuevo: Se añade
      const newItem = { ...product, quantity: 1 };
      newCartItems = [...cartItems, newItem];
    }

    // Uso de 'set' para actualizar el estado inmutablemente *
    set({ cartItems: newCartItems });
    updateLocalStorage(newCartItems); // Persistencia
  },

  // ACTUALIZAR la cantidad de un ítem
  updateQuantity: (productId, newQuantity) => {
    // Se asegura que la cantidad sea un número positivo y no cero
    const safeQuantity = Math.max(0, newQuantity);

    const newCartItems = get().cartItems
      .map(item =>
        item.id === productId
          ? { ...item, quantity: safeQuantity }
          : item
      )
      // Se elimina el item si la cantidad llega a 0
      .filter(item => item.quantity > 0);

    set({ cartItems: newCartItems });
    updateLocalStorage(newCartItems);
  },

  // ELIMINAR un producto
  removeFromCart: (productId) => {
    const newCartItems = get().cartItems.filter(item => item.id !== productId);
    set({ cartItems: newCartItems });
    updateLocalStorage(newCartItems);
  },

  // ACCIÓN DE PAGO (Checkout)
  checkout: () => {
    // 💡 Cumple con el requerimiento: Limpiar carrito al pagar
    set({ cartItems: [] });
    updateLocalStorage([]);
  },

  // VACIAR el carrito
  clearCart: () => {
    set({ cartItems: [] });
    updateLocalStorage([]);
  },

  // ACCIONES...
}));

// --------------------------------------------
// Selectores fuera del Store
// --------------------------------------------
// Estos selectores están fuera del 'create' para que no se disparen re-renders innecesarios.
// Zustand los memorizará automáticamente.

// Selector para calcular el total del carrito
export const selectTotal = (state) => {
  const total = state.cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);
  return total.toFixed(2);
};

// Selector para obtener la cantidad total de items en el carrito
export const selectItemCount = (state) => {
  return state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
};