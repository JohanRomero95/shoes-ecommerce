// CarritoModal.js
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";
import { agregarNueves } from "../../helpers/agregarNueves";
import { FaRegTrashCan } from "react-icons/fa6";

const CarritoModal = ({ isOpen, onClose }) => {
	const { carrito, precioTotal, eliminarDelCarrito } = useContext(CarritoContext);

	// const handleVaciar = () => {
	// 	vaciarCarrito([]);
	// };

	if (!isOpen) {
		return null;
	}

	return (
		<div className="carrito-modal">
			<div className="carrito-content">
				<button className="close-btn" onClick={onClose}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<h2>Carrito de Compras Y</h2>

				{carrito.map((prod) => (
					<div key={prod.id}>
						<h1>{prod.name}</h1>
						<button onClick={() => eliminarDelCarrito(prod.id)}>
							<FaRegTrashCan />
						</button>
						<p>{prod.cantidad}</p>
						<p>
							<strong>${`${(agregarNueves(prod.price) * prod.cantidad).toFixed(3)}`}</strong>
						</p>
					</div>
				))}

				<h3>Total</h3>
				<h3>${precioTotal().toFixed(3)}</h3>
			</div>
		</div>
	);
};

export default CarritoModal;
