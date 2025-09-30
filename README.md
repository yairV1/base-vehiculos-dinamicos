# Base de Vehículos Dinámicos 🚗

Este proyecto es una aplicación web interactiva que permite **registrar vehículos**, mostrarlos en tarjetas dinámicas y gestionar un carrito de compras con **LocalStorage**, garantizando persistencia de datos incluso después de recargar la página.

🔗 [Ver en GitHub Pages](https://yairv1.github.io/base-vehiculos-dinamicos/index.html)

---

## 📋 Descripción del proyecto

El sistema se centra en la **gestión de vehículos**:
- El usuario llena un **formulario** con información como nombre, marca, modelo, kilometraje, precio e imagen.
- Cada vehículo se muestra como una **tarjeta dinámica** con dos acciones:
  - **Comprar** → envía el vehículo al carrito lateral.
  - **Eliminar** → quita la tarjeta de la vista y del LocalStorage.
- Existe una **barra lateral oculta (la tienda)** que se activa con un botón. En ella se visualizan los productos comprados.
- Un botón adicional permite acceder a una **tabla resumen** con todos los productos comprados.

Todo esto se guarda en el navegador usando **LocalStorage**, para que al actualizar la página los datos no se pierdan.

---

## ⚙️ Funcionamiento del código

El archivo principal JavaScript organiza la lógica en varias partes:

### 1. Constantes y variables globales
- Se capturan los inputs del formulario y contenedores donde se insertarán tarjetas y carrito.
- Se definen arrays globales:
  - `vehiculos` → almacena los vehículos creados (y persistidos en LocalStorage).
  - `carrito` → lista de autos comprados.

### 2. Creación de tarjetas de vehículos (`crearCard`)
- Genera dinámicamente un elemento tipo **Bootstrap card**.
- Muestra los datos del vehículo (foto, nombre, marca, modelo, kilometraje, precio).
- Incluye dos botones:
  - **Comprar**: agrega el vehículo al carrito.
  - **Eliminar**: quita la tarjeta del DOM, actualiza el array y el LocalStorage.

### 3. Manejo del formulario
- Captura el evento `submit`.
- Valida que todos los campos estén completos.
- Crea un objeto `vehiculo` y lo pasa a `crearCard`.
- Agrega el vehículo al DOM y al LocalStorage.
- Limpia el formulario.

### 4. Panel lateral (tienda)
- Se controla con dos botones:
  - Abrir → agrega la clase `active`.
  - Cerrar → remueve la clase `active`.
- Dentro muestra todos los autos comprados.

### 5. Carrito de compras
- Cada item del carrito se construye con `createCardCarrito`.
- Incluye un botón `"X"` para eliminar un producto específico.
- La función `actualizarCarrito` recalcula:
  - Los productos en el DOM.
  - El total acumulado en pesos chilenos (`toLocaleString("es-CL")`).
  - Persiste los cambios en LocalStorage.

### 6. Persistencia de datos
- Al cargar la página (`DOMContentLoaded`):
  - Se reconstruyen las tarjetas de vehículos desde LocalStorage.
  - Se recupera el carrito y se vuelve a renderizar.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** → estructura del sitio.
- **CSS3 + Bootstrap 5** → estilos y diseño responsivo.
- **JavaScript (DOM + LocalStorage)** → lógica de interacción y persistencia.

---

## 🚀 Cómo usarlo

1. Rellena el formulario con los datos de un vehículo.
2. Haz clic en **Agregar** → aparece una tarjeta en la sección principal.
3. En la tarjeta puedes:
   - **Comprar** → envía el vehículo al carrito lateral.
   - **Eliminar** → borra el vehículo (DOM + LocalStorage).
4. Abre la **barra lateral de la tienda** para revisar las compras.
5. Revisa el **total acumulado** y elimina autos si lo deseas.
6. Si recargas la página, los datos siguen ahí gracias a LocalStorage.

---

## 👨‍💻 Autor

- **Yair V1**  
Proyecto académico de práctica con **JavaScript y LocalStorage**.  



