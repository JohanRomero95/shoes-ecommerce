import React, { createContext, useState } from "react";
import { agregarNueves } from "../helpers/agregarNueves";
import { toast } from "react-hot-toast";
export const CarritoContext = createContext();
import "../styles/App.css";

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
					toast(`No se pueden sumar más unidades, quedan ${stockDisponible} en stock`, {
						position: "top-center",
						icon: "⛔",
						style: {
							marginTop: "4rem",
							padding: "1rem",
							fontWeight: "600",
							color: "#1c1c1c",
							textAlign: "center",
						},
					});

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

	const agregarAlCarrito = (producto, cantidad, talla) => {
		const itemAgregado = { ...producto, cantidad, talla };

		const nuevoCarrito = [...carrito];
		const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

		if (estaEnElCarrito) {
			const stockDisponible = producto.stock - estaEnElCarrito.cantidad;
			if (cantidad <= stockDisponible) {
				estaEnElCarrito.cantidad += cantidad;
			} else {
				toast(`No nos quedan en stock`, {
					position: "top-center",
					icon: "⛔",
					style: { marginTop: "2rem", padding: "1rem", fontWeight: "600", color: "#1c1c1c" },
				});
			}
			// ⚠️🚫⛔❌
		} else {
			if (cantidad <= producto.stock) {
				nuevoCarrito.push(itemAgregado);
				toast.custom(
					() => (
						<div className="toast-container">
							<p>Añadido al carrito:</p>
							<div className="toast">
								<img src={producto.imageURL} alt={producto.name} className="toast-img" />
								<h2>{producto.name}</h2>
							</div>
						</div>
					),
					{ position: "top-left", persist: true, duration: 500 },
				);
			} else {
				console.log(
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
		return carrito.reduce((total, item) => {
			const precio = item.has_offer
				? item.price - (item.price * item.offer_percentage) / 100
				: item.price;
			return total + agregarNueves(precio) * item.cantidad;
		}, 0);
	};

	return (
		<>
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
		</>
	);
};

export default CarritoProvider;
