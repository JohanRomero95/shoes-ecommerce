// CarritoContext.js
import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [carritoAbierto, setCarritoAbierto] = useState(false);

	const addToCarrito = (producto) => {
		setCarrito((prevCarrito) => [...prevCarrito, producto]);
	};

	const abrirCarrito = () => {
		setCarritoAbierto(true);
	};

	const cerrarCarrito = () => {
		setCarritoAbierto(false);
	};

	return (
		<CarritoContext.Provider
			value={{ carrito, addToCarrito, carritoAbierto, abrirCarrito, cerrarCarrito }}>
			{children}
		</CarritoContext.Provider>
	);
};

export const useCarrito = () => {
	return useContext(CarritoContext);
};
