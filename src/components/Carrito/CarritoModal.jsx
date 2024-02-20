// CarritoModal.js
import React, { useContext, useEffect, useRef } from "react";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";
import { agregarNueves } from "../../helpers/agregarNueves";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { BsEmojiFrown } from "react-icons/bs";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";

const CarritoModal = ({ isOpen, onClose }) => {
	const {
		carrito,
		precioTotal,
		eliminarDelCarrito: eliminarDelCarritoPorItem,
		handleSumar,
		handleRestar,
		vaciarCarrito,
	} = useContext(CarritoContext);

	const modalRef = useRef();

	const handleClickOutsideModal = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("modal-open");
		} else {
			document.body.classList.remove("modal-open");
		}

		return () => {
			document.body.classList.remove("modal-open");
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="carrito-modal" onClick={handleClickOutsideModal}>
			<div className="carrito-content" ref={modalRef}>
				<div className="carrito-modal--header">
					<p>Mi Compra</p>
					<button className="carrito-modal--button--close" onClick={onClose}>
						<GrClose />
					</button>
				</div>
				<div className="trash-container">
					{carrito.length > 0 && (
						<FaRegTrashCan
							onClick={vaciarCarrito}
							className="trash"
							title="Vaciar todo el carrito"
							alt="Vaciar todo el carrito"
						/>
					)}
				</div>
				{carrito.length > 0 ? (
					<div className="carrito-contenedor--productos">
						{carrito.map((prod) => (
							<div className="carrito--contenedor--detalles" key={prod.id}>
								<Link to={`/producto/${prod.id}`}>
									<img
										className="carrito-contenedor--productos--imagenes"
										src={prod.imageURL}
										alt={prod.name}
									/>
								</Link>
								<div className="carrito-contenedor--productos--description">
									<Link to={`/producto/${prod.id}`}>
										<h1 className="carrito-contenedor--productos--description---titulo">
											{prod.name}
										</h1>
									</Link>

									{/* <p>{prod.cantidad}</p> */}
									<p>
										<strong>
											${`${(agregarNueves(prod.price) * prod.cantidad).toFixed(3)}`}
										</strong>
									</p>
								</div>
								<div>
									<button
										className="carrito-contenedor--productos--description---basura"
										onClick={() => eliminarDelCarritoPorItem(prod.id)}>
										<FaRegTrashCan />
									</button>
								</div>
								<div className="contador">
									<button onClick={() => handleRestar(prod.id)}>-</button>
									<p>{prod.cantidad}</p>
									<button onClick={() => handleSumar(prod.id)}>+</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="no-hay-producto">
						<CiShoppingBasket className="no-hay-producto--icon" />
						<p className="no-hay-producto--title">
							Tu carrito está vacío{" "}
							<BsEmojiFrown strokeWidth=".5" className="no-hay-producto--emoji" />
						</p>
					</div>
				)}
				{carrito.length > 0 && (
					<section className="contenedor-compra">
						<div className="contenedor-compra--monto">
							<h3>Total</h3>
							<h3>${precioTotal().toFixed(3)}</h3>
						</div>

						<section className="finalizar-compra">
							<ButtonPrimary title="Finalizar compra" isSpecial />
							<Link to={"/Colección"} className="finalizar-compra--enlace" onClick={onClose}>
								<p>Seguir comprando</p>
								<SlArrowRight
									strokeWidth="50"
									className="finalizar-compra--enlace---flecha"
								/>
							</Link>
						</section>
					</section>
				)}
			</div>
		</div>
	);
};

export default CarritoModal;
