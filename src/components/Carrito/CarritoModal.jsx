import React, { useContext, useEffect, useRef } from "react";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";
import { agregarNueves } from "../../helpers/agregarNueves";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";

const CarritoModal = ({ isOpen, onClose }) => {
	const {
		carrito,
		precioTotal,
		eliminarDelCarrito: eliminarDelCarritoPorItem,
		handleSumar,
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
		<main className="carrito-modal" onClick={handleClickOutsideModal}>
			<aside className="carrito-content" ref={modalRef}>
				<header className="carrito-modal--header">
					<p>Mi Compra</p>
					<button className="carrito-modal--button--close" onClick={onClose}>
						<GrClose />
					</button>
				</header>
				<figure className="trash-container">
					{carrito.length > 0 && (
						<FaRegTrashCan
							onClick={vaciarCarrito}
							className="trash"
							title="Vaciar todo el carrito"
							alt="Vaciar todo el carrito"
						/>
					)}
				</figure>
				{carrito.length > 0 ? (
					<section className="carrito-contenedor--productos">
						{carrito.map((prod) => (
							<article className="carrito--contenedor--detalles" key={prod.id}>
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
									<p>
										<strong>
											${`${(agregarNueves(prod.price) * prod.cantidad).toFixed(3)}`}
										</strong>
									</p>
								</div>
								<div className="carrito-contenedor--basura">
									{/* <button
										className="carrito-contenedor--productos--description---basura"
										onClick={() => eliminarDelCarritoPorItem(prod.id)}>
										<FaRegTrashCan />
									</button> */}
									<div className="contador">
										<button onClick={() => eliminarDelCarritoPorItem(prod.id)}>-</button>
										<p>{prod.cantidad}</p>
										<button onClick={() => handleSumar(prod.id)}>+</button>
									</div>
								</div>
							</article>
						))}
					</section>
				) : (
					<div className="no-hay-producto">
						<CiShoppingBasket className="no-hay-producto--icon" />
						<p className="no-hay-producto--title">Tu carrito está vacío</p>
					</div>
				)}
				{carrito.length > 0 && (
					<footer className="contenedor-compra">
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
					</footer>
				)}
			</aside>
		</main>
	);
};

export default CarritoModal;