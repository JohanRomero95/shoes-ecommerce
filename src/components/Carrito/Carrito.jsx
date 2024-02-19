import { useContext, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CarritoModal from "./CarritoModal";
import "../Carrito/Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";

const IconoCarrito = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const { carrito } = useContext(CarritoContext);

	const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<Link to="#" onClick={handleOpenModal}>
				<FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000" }} />
			</Link>
			<CarritoModal isOpen={modalOpen} onClose={handleCloseModal} /> {cantidadEnCarrito}
		</>
	);
};

export default IconoCarrito;
