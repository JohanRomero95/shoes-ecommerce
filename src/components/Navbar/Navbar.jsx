import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito/Carrito";
import MenuPlegable from "../MenuPlegable/MenuPlegable";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [subMenuActivo, setSubMenuActivo] = useState(null);
	const [menuAbierto, setMenuAbierto] = useState(false);
	const modalRef = useRef();

	const toggleSubMenu = (titulo) => {
		setSubMenuActivo(subMenuActivo === titulo ? null : titulo);
	};

	const toggleMenu = () => {
		setMenuAbierto(!menuAbierto);
	};

	// const handleLinkClick = () => {
	// 	setMenuAbierto(false);
	// };

	const handleClickOutsideModal = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			setMenuAbierto(false);
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
			// document.body.style.overflow = "inherit";
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
				<MenuPlegable
					toggleSubMenu={toggleSubMenu}
					subMenuActivo={subMenuActivo}
					toggleMenu={toggleMenu}
				/>
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
