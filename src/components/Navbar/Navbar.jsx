import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito/Carrito";
import Usuario from "../Usuario/Usuario";
import "./Navbar.css";
import MenuPlegable from "../MenuPlegable/MenuPlegable";

const Navbar = () => {
	return (
		<nav className="navbar">
			{/* Sección izquierda */}
			<ul className="navbar-left">
				<Link to="/">
					<h1 className="title">
						trend<span>Elite</span>
					</h1>
				</Link>
			</ul>

			{/* Sección central */}
			<ul className="navbar-center">
				<MenuPlegable className="navbar-link" />
			</ul>

			{/* Sección derecha */}
			<ul className="navbar-right">
				<li className="carrito-contenedor">
					<IconoCarrito />
				</li>
				<li>
					<Usuario />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
