import { useState } from "react";
import { Link } from "react-router-dom";
import { agregarNueves } from "../../helpers/agregarNueves";
import "./Card.css";

const Card = ({ ...producto }) => {
	const [hoverEffect, setHoverEffect] = useState(false);

	const handleMouseEnter = () => {
		setHoverEffect(true);
	};

	const handleMouseLeave = () => {
		setHoverEffect(false);
	};

	return (
		<div
			title={producto.name}
			className={`productos ${
				producto.submenu.toLowerCase().includes("ropa") ? "ropa-hover" : ""
			}`}
			key={producto.id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<img className="logo-shoes" src={producto.logo} alt="" />
			<img
				className={`shoes ${hoverEffect ? "scale-on-hover" : ""}`}
				src={producto.imageURL}
				alt={producto.name}
				title={producto.name}
			/>{" "}
			<div className="color-options">
				<div className="color-option blue"></div>
				<div className="color-option green"></div>
				<div className="color-option red"></div>
				{/* Agrega más opciones de colores según sea necesario */}
			</div>
			<div className="description-shoes">
				<h3>{producto.name}</h3>
				<p className="description-shoes-par">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.
				</p>
				<p className="description-shoes-price">
					Price: <span>${agregarNueves(producto.price)}</span>
				</p>
				<Link>
					<button>Add To Cart</button>
				</Link>
			</div>
		</div>
	);
};

export default Card;
