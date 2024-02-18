// CarritoModal.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../components/Carrito.css";

const CarritoModal = ({ isOpen, onClose }) => {
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
			</div>
		</div>
	);
};

export default CarritoModal;
