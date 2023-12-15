import { useEffect, useState } from "react";
import { datos } from "../../helpers/datos";
import "./ListaDeProductos.css";
import { agregarCeros } from "../../helpers/agregarCero";

const ListaDeProductos = () => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		datos().then((res) => {
			setProductos(res);
		});
	}, []);

	return (
		<div className="lista-de-productos">
			{productos.map((productos) => (
				<div className="productos" key={productos.id}>
					<img className="logo-shoes" src={productos.imageURL} alt="" />
					<img className="shoes" src={productos.imageURL} alt={productos.name} />
					<div className="description-shoes">
						<h3>{productos.name}</h3>
						<p className="description-shoes-par">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.{" "}
						</p>
						<p className="description-shoes-price">
							Price: <span>${agregarCeros(productos.price)}</span>
						</p>
						<button>Add To Cart</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListaDeProductos;
