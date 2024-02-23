import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito/Carrito";
import Usuario from "../Usuario/Usuario";
import "./Navbar.css";
import MenuPlegable from "../MenuPlegable/MenuPlegable";
import { useState } from "react";

const Navbar = () => {
	const [menuAbierto, setMenuAbierto] = useState(false);

	const toggleMenu = () => {
		setMenuAbierto(!menuAbierto);
	};

	return (
		<nav className={`navbar ${menuAbierto ? "abierto" : ""}`}>
			{/* Sección izquierda */}
			<ul className="navbar-left">
				<Link to="/">
					<h1 className="title">
						trend<span>Elite</span>
					</h1>
				</Link>
			</ul>

			{/* Sección central */}
			<ul className={`navbar-center ${menuAbierto ? "abierto" : ""}`}>
				<MenuPlegable className="navbar-link" />
			</ul>

			{/* Sección derecha */}
			<ul className="navbar-right">
				<li>
					<Usuario />
				</li>
				<li className="carrito-contenedor">
					<IconoCarrito />
				</li>
				<div className="navbar-hamburguesa" onClick={toggleMenu}>
					<div className={`linea ${menuAbierto ? "linea-1" : ""}`}></div>
					<div className={`linea ${menuAbierto ? "linea-2" : ""}`}></div>
					<div className={`linea ${menuAbierto ? "linea-3" : ""}`}></div>
				</div>
			</ul>
			{/* Menú hamburguesa para móvil */}
		</nav>
	);
};

export default Navbar;
