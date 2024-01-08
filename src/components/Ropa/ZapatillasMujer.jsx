import { Link, useParams } from "react-router-dom";
import { useProductos } from "../Call/useProductos";
import "./Ropa.css";
import { agregarNueves } from "../../helpers/agregarNueves";

const Elementos = () => {
	const { encabezado, subCategorias, titulo } = useParams();
	const productos = useProductos();

	// Filtrar dinámicamente los productos según la categoría "RUNNING" o el género "WOMEN"
	const filtrarProductos = productos.filter((producto) => {
		return (
			producto.gender.toLowerCase() == titulo.toLowerCase() &&
			producto.category.toLowerCase() == subCategorias.toLowerCase()
		);
		// asi me funciona por genero y en miniscula
	});

	if (filtrarProductos.length === 0) {
		return (
			<div>
				<h1>R</h1>
				<h1>R</h1>
				<h1>No se encontraron Resultados</h1>
				<h1></h1>
			</div>
		);
	}

	return (
		<>
			<h1>r</h1>
			<h1>r</h1>
			<h1>r</h1>
			<h1>{titulo}</h1>
			<h1>{encabezado}</h1>
			<h1>{subCategorias}</h1>
			<h1>Esta funcionando</h1>

			<div className="contenedor">
				<div className="lista-de-productos">
					{filtrarProductos.map((producto) => (
						<div className="productos" key={producto.id}>
							<img className="logo-shoes" src={producto.logo} alt="" />
							<img className="shoes" src={producto.imageURL} alt={producto.name} />
							<div className="description-shoes">
								<h1>{producto.gender}</h1>
								<h3>{producto.name}</h3>
								<p className="description-shoes-par">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque.{" "}
								</p>
								<p className="description-shoes-price">
									Price: <span>${agregarNueves(producto.price)}</span>
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

export default Elementos;
