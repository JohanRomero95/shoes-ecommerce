import "./ListaDeProductos.css";
import { agregarNueves } from "../../helpers/agregarNueves";
import { useProductos } from "../Call/useProductos";
import { Link, useParams } from "react-router-dom";

const ListaDeProductos = () => {
	const productos = useProductos();
	// const { titulo } = useParams();
	// const filtrarProductos = productos.filter((producto) => {
	// 	return producto.gender.toLowerCase() == titulo.toLowerCase();
	// });

	return (
		<>
			<div className="contenedor">
				<div className="lista-de-productos">
					{productos.map((productos) => (
						<div className="productos" key={productos.id}>
							<img className="logo-shoes" src={productos.logo} alt="" />
							<img className="shoes" src={productos.imageURL} alt={productos.name} />
							<div className="description-shoes">
								<h1>{productos.gender}</h1>
								<h3>{productos.name}</h3>
								<p className="description-shoes-par">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.{" "}
								</p>
								<p className="description-shoes-price">
									Price: <span>${agregarNueves(productos.price)}</span>
								</p>
								<Link>
									<button>Add To Cart</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ListaDeProductos;
