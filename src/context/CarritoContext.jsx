import React, { createContext, useState } from "react";
import { agregarNueves } from "../helpers/agregarNueves";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
	const [cantidad, setCantidad] = useState(1);
	const [carrito, setCarrito] = useState([]);

	const handleSumar = (id) => {
		const nuevoCarrito = carrito.map((item) => {
			if (item.id === id) {
				const stockDisponible = item.stock - item.cantidad;
				if (stockDisponible > 0) {
					return { ...item, cantidad: item.cantidad + 1 };
				} else {
					// Si se intenta sumar más unidades de las disponibles, se muestra un mensaje o se hace alguna acción
					console.log(
						`No se pueden sumar más unidades, solo quedan ${stockDisponible} en stock`,
					);
					return item;
				}
			} else {
				return item;
			}
		});
		setCarrito(nuevoCarrito);
	};

	const handleRestar = (id) => {
		const nuevoCarrito = carrito.map((item) =>
			item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item,
		);
		setCarrito(nuevoCarrito);
	};

	const agregarAlCarrito = (producto, cantidad) => {
		const itemAgregado = { ...producto, cantidad };

		const nuevoCarrito = [...carrito];
		const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

		if (estaEnElCarrito) {
			const stockDisponible = producto.stock - estaEnElCarrito.cantidad;
			if (cantidad <= stockDisponible) {
				estaEnElCarrito.cantidad += cantidad;
			} else {
				// Si se intenta agregar más unidades de las disponibles, se muestra un mensaje o se hace alguna acción
				console.log(
					// AGREGAR EL TOAST DE NO HAY STOCK
					`No se pueden agregar ${cantidad} unidades, solo quedan ${stockDisponible} en stock`,
				);
			}
		} else {
			if (cantidad <= producto.stock) {
				nuevoCarrito.push(itemAgregado);
			} else {
				// Si se intenta agregar más unidades de las disponibles, se muestra un mensaje o se hace alguna acción
				console.log(
					// AGREGAR EL TOAST DE NO HAY STOCK
					`No se pueden agregar ${cantidad} unidades, solo quedan ${producto.stock} en stock`,
				);
			}
		}
		setCarrito(nuevoCarrito);
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

	const vaciarCarrito = () => {
		setCarrito([]);
	};

	const cantidadEnCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

	const precioTotal = () => {
		return carrito.reduce((total, item) => total + agregarNueves(item.price) * item.cantidad, 0);
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
				eliminarDelCarrito,
				handleSumar,
				handleRestar,
				vaciarCarrito,
			}}>
			{children}
		</CarritoContext.Provider>
	);
};

export default CarritoProvider;
