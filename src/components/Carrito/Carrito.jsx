import { useContext, useState } from "react";
import { TbShoppingCartFilled } from "react-icons/tb";
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
			<TbShoppingCartFilled className="carrito" onClick={handleOpenModal} />
			{cantidadEnCarrito >= 1 && <span className="carrito-number">{cantidadEnCarrito}</span>}
			<CarritoModal isOpen={modalOpen} onClose={handleCloseModal} />
		</>
	);
};

export default IconoCarrito;
