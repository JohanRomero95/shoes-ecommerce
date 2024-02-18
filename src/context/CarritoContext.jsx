import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

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

	return (
		<CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
			{children}
		</CarritoContext.Provider>
	);
};

export default CarritoProvider;
