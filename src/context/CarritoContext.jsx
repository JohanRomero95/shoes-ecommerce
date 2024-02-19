import React, { createContext, useState } from "react";
import { agregarNueves } from "../helpers/agregarNueves";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
	const [cantidad, setCantidad] = useState(1);
	const [carrito, setCarrito] = useState([]);

	const handleSumar = () => {
		cantidad < producto.stock && setCantidad(cantidad + 1);
	};

	const handleRestar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};

	const eliminarDelCarrito = (id) => {
		const nuevoCarrito = carrito
			.map((producto) => {
				if (producto.id === id) {
					if (producto.cantidad > 1) {
						return { ...producto, cantidad: producto.cantidad - 1 };
					} else {
						return null; // Eliminar el producto del carrito
					}
				}
				return producto;
			})
			.filter(Boolean); // Filtrar los elementos nulos (productos eliminados)
		setCarrito(nuevoCarrito);
	};

	// esta funcion vacia el carrito por completo
	// const vaciarCarrito = () => {
	// 	setCarrito([]);
	// };

	const agregarAlCarrito = (producto, cantidad) => {
		const itemAgregado = { ...producto, cantidad };

		const nuevoCarrito = [...carrito];
		const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

		if (estaEnElCarrito) {
			estaEnElCarrito.cantidad += cantidad;
		} else {
			nuevoCarrito.push(itemAgregado);
		}
		setCarrito(nuevoCarrito);
	};

	const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);

	const precioTotal = () => {
		return carrito.reduce((acc, prod) => acc + agregarNueves(prod.price) * prod.cantidad, 0);
	};

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarAlCarrito,
				cantidadEnCarrito,
				precioTotal,
				cantidad,
				setCantidad,
				// vaciarCarrito,
				eliminarDelCarrito,
			}}>
			{children}
		</CarritoContext.Provider>
	);
};

export default CarritoProvider;
