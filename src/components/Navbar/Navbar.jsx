import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito";
import Usuario from "../Usuario/Usuario";
import "./Navbar.css";
import MenuPlegable from "../MenuPlegable/MenuPlegable";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar-left">
					<Link to="/">
						<h1 className="title" to="/">
							sneakers
						</h1>
					</Link>
				</ul>
				<MenuPlegable />
				<ul className="navbar-right">
					<li>
						<IconoCarrito />
					</li>
					<li>
						<Usuario />
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
