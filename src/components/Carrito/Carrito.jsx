import { useContext, useState } from "react";
import { TbShoppingCartFilled } from "react-icons/tb";
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
				<TbShoppingCartFilled className="carrito" />
				<span className="carrito-number">{cantidadEnCarrito}</span>
			</Link>
			<CarritoModal isOpen={modalOpen} onClose={handleCloseModal} />
		</>
	);
};

export default IconoCarrito;
