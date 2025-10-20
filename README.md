# React + Vite
# ⚙️ Prueba Técnica: Mini E-commerce de Maquinaria Industrial

Este proyecto es la solución a la Prueba Técnica de Desarrollador Frontend, construido con **React** y **Vite**. La aplicación implementa un carrito de compras funcional, persistencia de datos y una estructura de código profesional.

---

## 🚀 Requerimientos y Funcionalidad Implementada

| Requerimiento Funcional | Marcador en Código | Estado | Descripción Técnica |
| :--- | :--- | :--- | :--- |
| **RF1: Listado de Productos** | N/A | ✅ Completo | Muestra el catálogo de productos cargados desde un **Mock JSON** (`data/products.json`). |
| **RF2: Carrito de Compras** | N/A | ✅ Completo | Permite **añadir**, **editar cantidad** y **eliminar** ítems del carrito. |
| **RF3: Acción de Pago** | `(RF3)` | ✅ Completo | El botón de Pagar en `CartSummary.jsx` **limpia el estado del carrito** y redirige a la página de agradecimiento. |
| **RF4: Persistencia** | `(RF4)` | 🌟 Plus Implementado | El estado del carrito se guarda en **`localStorage`** y se restaura al recargar la página. |

---

## 🧠 Arquitectura y Decisiones Técnicas

### 1. Gestión de Estado: Zustand (Optimizado)

Se eligió **Zustand** por su ligereza. Las optimizaciones clave realizadas para garantizar la estabilidad y rendimiento fueron:

* **Selectores Externos:** La lógica de cálculo (`selectTotal`, `selectItemCount`) se separó del `create` del Store. Esto resuelve los problemas de **bucle infinito** (`Maximum update depth exceeded`) al garantizar que los selectores sean referencias estables.
* **Consumo Estabilizado:** Las funciones de acción (`checkout`, `updateQuantity`) se consumen con llamadas separadas (`useCartStore(state => state.funcion)`) para mantener referencias estables en los componentes hijos.

### 2. Estructura y Estilado Profesional

* **Patrón Container/Presentational:** Se utilizó el patrón para separar la lógica de datos (`ProductList.jsx`) de la interfaz de usuario (`ProductCard.jsx`).
* **Refactorización de Estilos:** Todos los estilos en línea se movieron a un archivo central **`src/App.css`**. Los componentes utilizan exclusivamente el atributo `className`, mejorando la legibilidad y el mantenimiento.
* **Manejo de Imágenes:** Las imágenes estáticas de los productos se ubican en la carpeta **`public/images`** para un fácil acceso a través de rutas relativas.

---

## 🛠️ Instrucciones de Instalación

Para levantar y probar el proyecto:

1.  **Clonar el repositorio:**
    ```bash
    git clone [TU_REPO_AQUI]
    cd [nombre-del-repo]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

El proyecto estará disponible en `http://localhost:5173/`.