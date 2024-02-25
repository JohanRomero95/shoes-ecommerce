import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito/Carrito";
import "./Navbar.css";
import MenuPlegable from "../MenuPlegable/MenuPlegable";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const [menuAbierto, setMenuAbierto] = useState(false);

	const toggleMenu = () => {
		setMenuAbierto(!menuAbierto);
	};

	const modalRef = useRef();

	const handleClickOutsideModal = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			setMenuAbierto(false);
			// Habilitar el scroll cuando se cierra el menú
			document.body.style.overflow = "auto";
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutsideModal);
		return () => {
			document.removeEventListener("mousedown", handleClickOutsideModal);
		};
	}, []);

	useEffect(() => {
		if (menuAbierto) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [menuAbierto]);

	return (
		<nav className={`navbar ${menuAbierto ? "abierto" : ""}`} onClick={handleClickOutsideModal}>
			<section className="navbar-left">
				<Link
					to="/"
					title="Ir a la página de inicio"
					aria-label="Ir a la página de inicio"
					alt="Ir a la página de inicio">
					<h1 className="title">
						trend<span>Elite</span>
					</h1>
				</Link>
			</section>

			<section className={`navbar-center ${menuAbierto ? "abierto" : ""}`}>
				<MenuPlegable className="navbar-link" />
			</section>

			<section className="navbar-right">
				<div className="carrito-contenedor">
					<IconoCarrito
						title="Carrito de compras"
						aria-label="Carrito de compras"
						alt="Carrito de compras"
					/>
				</div>
				<nav
					className="navbar-hamburguesa"
					onClick={toggleMenu}
					ref={modalRef}
					title="Ir a menu hamburguesa"
					alt="Ir a menu hamburguesa"
					aria-label="Ir a menu hamburguesa">
					<figure className={`linea ${menuAbierto ? "linea-1" : ""}`}></figure>
					<figure className={`linea ${menuAbierto ? "linea-2" : ""}`}></figure>
					<figure className={`linea ${menuAbierto ? "linea-3" : ""}`}></figure>
				</nav>
			</section>
		</nav>
	);
};

export default Navbar;
