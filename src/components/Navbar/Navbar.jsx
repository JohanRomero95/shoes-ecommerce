import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito";
import Usuario from "../Usuario/Usuario";
import "./Navbar.css";
import MenuPlegable from "../MenuPlegable/MenuPlegable";

const Navbar = () => {
	return (
		<header>
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
					<li>
						<IconoCarrito />
					</li>
					<li>
						<Usuario />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
