import { Link } from "react-router-dom";
import { agregarNueves } from "../../helpers/agregarNueves";
import "./Card.css";

const Card = ({ ...producto }) => {
	return (
		<div className="productos" key={producto.id}>
			<img className="logo-shoes" src={producto.logo} alt="" />
			<img className="shoes" src={producto.imageURL} alt={producto.name} />
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
