// Card.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { agregarNueves } from "../../helpers/agregarNueves";
import "./Card.css";
import { toast } from "react-toastify";
import { useCarrito } from "../CarritoContext";
import { LiaCartArrowDownSolid } from "react-icons/lia";
const Card = ({ ...producto }) => {
	const [hoverEffect, setHoverEffect] = useState(false);
	const [shoeColor, setShoeColor] = useState(
		producto.colors && producto.colors.length > 0 ? producto.colors[0] : "",
	);

	const { addToCarrito } = useCarrito();

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

	const handleAddToCart = (e) => {
		e.preventDefault();
		addToCarrito({ ...producto, selectedColor: shoeColor });
		toast.success("Producto añadido al Carrito!", {
			position: "bottom-right",
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
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
			</Link>
			<div className="description-shoes">
				<h3>{producto.name}</h3>
				<p className="description-shoes-par">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.
				</p>
				<p className="description-shoes-price">
					Price: <span>${agregarNueves(producto.price)}</span>
				</p>
				<button onClick={handleAddToCart} type="button">
					<span>
						<LiaCartArrowDownSolid />
					</span>{" "}
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default Card;
