import "./ListaDeProductos.css";
import { agregarNueves } from "../../helpers/agregarNueves";
import { useProductos } from "../Call/useProductos";

const ListaDeProductos = () => {
	const productos = useProductos();

	return (
		<div className="contenedor">
			<div className="lista-de-productos">
				{productos.map((productos) => (
					<div className="productos" key={productos.id}>
						<img className="logo-shoes" src={productos.logo} alt="" />
						<img className="shoes" src={productos.imageURL} alt={productos.name} />
						<div className="description-shoes">
							<h3>{productos.name}</h3>
							<p className="description-shoes-par">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.{" "}
							</p>
							<p className="description-shoes-price">
								Price: <span>${agregarNueves(productos.price)}</span>
							</p>
							<button>Add To Cart</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListaDeProductos;
