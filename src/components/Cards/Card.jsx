import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { agregarNueves } from "../../helpers/agregarNueves";
import "./Card.css";

const Card = ({ ...producto }) => {
	// Estado para el efecto hover
	const [hoverEffect, setHoverEffect] = useState(false);

	// Estado para el color seleccionado del zapato
	const [shoeColor, setShoeColor] = useState(
		producto.colors && producto.colors.length > 0 ? producto.colors[0] : "",
	);

	// Efecto para actualizar el color del zapato cuando cambian los colores disponibles
	useEffect(() => {
		if (producto.colors && producto.colors.length > 0) {
			setShoeColor(producto.colors[0]);
		}
	}, [producto.colors]);

	// Manejadores de eventos para el efecto hover
	const handleMouseEnter = () => {
		setHoverEffect(true);
	};

	const handleMouseLeave = () => {
		setHoverEffect(false);
	};

	// Función para cambiar el color del zapato
	const changeColor = (color) => {
		setShoeColor(color);
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
			{/* Logo del producto */}
			<img className="logo-shoes" src={producto.logo} alt="" />

			{/* Imagen del zapato */}
			<img
				className={`shoes ${hoverEffect ? "scale-on-hover" : ""}`}
				src={producto.imageURL}
				alt={producto.name}
				title={producto.name}
				style={{
					filter: `hue-rotate(${
						shoeColor
							? (producto.colors.indexOf(shoeColor) + 2) * (360 / producto.colors.length)
							: 0
					}deg)`,
				}}
			/>

			{/* Opciones de colores */}
			<div className="color-options">
				{producto.colors &&
					producto.colors.map((color, index) => (
						<div
							key={index}
							className={`color-option ${color.toLowerCase()}`}
							onClick={() => changeColor(color)}
							style={{
								backgroundColor: color,
							}}></div>
					))}
			</div>

			{/* Descripción del producto */}
			<div className="description-shoes">
				<h3>{producto.name}</h3>
				<p className="description-shoes-par">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.
				</p>
				<p className="description-shoes-price">
					Price: <span>${agregarNueves(producto.price)}</span>
				</p>
				<Link to="/Producto/id">
					{" "}
					{/* Agrega la URL del enlace */}
					<button>Add To Cart</button>
				</Link>
			</div>
		</div>
	);
};

export default Card;
