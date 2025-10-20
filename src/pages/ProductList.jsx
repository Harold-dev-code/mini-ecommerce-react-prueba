// usar hook usaState y useEffect para simular la carga del backend.
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
// Importar directamente el mock de datos
import Maquinas from '../data/products.json';
import '../App.css'; // Importar los estilos

// ----------------------------------------------------
// Componente Contenedor (Container)
// Maneja la Lógica de Carga de Datos y el Estado de la Lista
// ----------------------------------------------------
function ProductList() {
  // Hook de Estado Local para almacenar los productos cargados
  const [products, setProducts] = useState([]);
  
  // Hook de Efecto Secundario para simular la Petición a la API
  
  useEffect(() => {
    // Aquí se simularía una llamada asíncrona (fetch) a un backend real.
    // Para la prueba, simplemente cargamos el JSON.
    setProducts(Maquinas);

    // El array vacío [] como segundo argumento asegura que este efecto
    // solo se ejecute UNA VEZ, 
  }, []);

  if (products.length === 0) {
    return <h1 className="product-list-loading">Cargando Productos...</h1>;
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Catálogo Machines</h1>
      
      
    {/* 3. Mapeo y Renderizado: Itera sobre el array de productos */}
      <div className="product-list">
        {products.map(product => (
          // Por cada producto, renderiza el Componente Presentacional
          <ProductCard 
            key={product.id}
            product={product} // Le pasamos el objeto completo como prop a productCard
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;