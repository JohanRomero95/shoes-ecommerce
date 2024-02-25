// Card.jsx
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { agregarNueves } from "../../helpers/agregarNueves";
import "./Card.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CarritoContext } from "../../context/CarritoContext";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";

const Card = ({ ...producto }) => {
	const [hoverEffect, setHoverEffect] = useState(false);
	const { agregarAlCarrito } = useContext(CarritoContext);

	const [shoeColor, setShoeColor] = useState(
		producto.colors && producto.colors.length > 0 ? producto.colors[0] : "",
	);

	useEffect(() => {
		if (producto.colors && producto.colors.length > 0) {
			setShoeColor(producto.colors[0]);
		}
	}, [producto.colors]);

	const handleMouseEnter = () => {
		setHoverEffect(true);
	};

	const handleMouseLeave = () => {
		setHoverEffect(false);
	};

	const changeColor = (color) => {
		setShoeColor(color);
	};

	return (
		<div
			title={producto.name}
			className={`productos ${
				producto.submenu.toLowerCase().includes("ropa") ? "ropa-hover" : ""
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<Link
				to={`/producto/${producto.id}`}
				onClick={(e) => {
					if (e.target.classList.contains("color-option")) {
						e.preventDefault();
					}
				}}>
				<img className="logo-shoes" src={producto.logo} alt="" />
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
				<div className="description-shoes">
					<h3>{producto.name}</h3>
					<p className="description-shoes-par">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.
					</p>
					<p className="description-shoes-price">
						{/* Oferta */}
						{/* <span>${agregarNueves(producto.price)}</span> */}
					</p>
				</div>
			</Link>
			<div className="contenedor-button">
				<ButtonSecondary
					title={
						<div className="flex">
							<span className="icon">
								<LiaCartArrowDownSolid strokeWidth=".7" size={20} />
							</span>
							<span className="anade--carrito">Add to cart</span>
						</div>
					}
					isSpecial
					onClick={() => agregarAlCarrito(producto, 1)}></ButtonSecondary>
				<div className="contenedor-button-precios">
					<p className="contenedor-button-precios--oferta">${agregarNueves(producto.price)}</p>
					<p>${agregarNueves(producto.price)}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
