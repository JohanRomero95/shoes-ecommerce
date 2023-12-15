import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const IconoCarrito = () => {
	return (
		<div>
			<Link to="carrito">
				<FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000" }} />
			</Link>
		</div>
	);
};

export default IconoCarrito;
