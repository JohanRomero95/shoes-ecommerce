// CarritoModal.js
import React, { useContext } from "react";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";
import { agregarNueves } from "../../helpers/agregarNueves";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

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
				<div className="carrito-modal--header">
					<p>Mi Compra</p>
					<button className="carrito-modal--button--close" onClick={onClose}>
						<GrClose />
					</button>
				</div>

				<div className="carrito-contenedor--productos">
					{carrito.map((prod) => (
						<div className="carrito--contenedor--detalles" key={prod.id}>
							<img
								className="carrito-contenedor--productos--imagenes"
								src={prod.imageURL}
								alt={prod.name}
							/>
							<div className="carrito-contenedor--productos--description">
								<h1 className="carrito-contenedor--productos--description---titulo">
									{prod.name}
								</h1>

								<p>{prod.cantidad}</p>
								<p>
									<strong>
										${`${(agregarNueves(prod.price) * prod.cantidad).toFixed(3)}`}
									</strong>
								</p>
							</div>
							<div>
								<button onClick={() => eliminarDelCarrito(prod.id)}>
									<FaRegTrashCan />
								</button>
							</div>
						</div>
					))}
				</div>

				<h3>Total</h3>
				<h3>${precioTotal().toFixed(3)}</h3>

				<section className="finalizar-compra">
					<button className="finalizar-compra--btn">Finalizar compra</button>
					<Link to={"/Colección"} className="finalizar-compra--enlace" onClick={onClose}>
						Seguir comprando <SlArrowRight />
					</Link>
				</section>
			</div>
		</div>
	);
};

export default CarritoModal;
