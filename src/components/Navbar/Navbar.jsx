import { Link } from "react-router-dom";
import IconoCarrito from "../Carrito";
import Usuario from "../Usuario/Usuario";
import "../Navbar/Navbar.css";

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

				<ul className="navbar-center">
					<li>
						<Link to="collections">Collections</Link>
					</li>
					<li>
						<Link to="men">Men</Link>
					</li>
					<li>
						<Link to="women">Women</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>

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
