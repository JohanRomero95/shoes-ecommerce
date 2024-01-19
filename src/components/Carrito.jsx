// IconoCarrito.js
import { useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CarritoModal from "./CarritoModal";
import "../components/Carrito.css"

const IconoCarrito = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<Link to="#" onClick={handleOpenModal}>
				<FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000" }} />
			</Link>
			<CarritoModal isOpen={modalOpen} onClose={handleCloseModal} />
		</div>
	);
};

export default IconoCarrito;
