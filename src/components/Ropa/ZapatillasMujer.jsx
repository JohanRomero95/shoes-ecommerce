import { Link, useParams } from "react-router-dom";
import { useProductos } from "../Call/useProductos";
import "./Ropa.css";
import { agregarNueves } from "../../helpers/agregarNueves";

const Elementos = () => {
	const { encabezado, subCategorias, titulo } = useParams();
	const productos = useProductos();

	// Filtrar dinámicamente los productos según la categoría o el género
	const filtrarProductos = productos.filter((producto) => {
		return (
			(producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() &&
				producto.type.toLowerCase().trim() === encabezado.toLowerCase().trim()) ||
			producto.gender.includes(`${encabezado}`)
		);
	});

	// Si se ha seleccionado una categoría específica, filtrar los productos
	let productosFiltrados;
	if (subCategorias !== `Todo ${encabezado}`) {
		productosFiltrados = filtrarProductos.filter(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);
	} else {
		productosFiltrados = filtrarProductos;
	}

	// Verificar si no se encontraron productos con la categoría deseada
	const categoriaNoEncontrada =
		subCategorias !== "Todo" &&
		!filtrarProductos.some(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);

	return (
		<>
			{productosFiltrados.length > 0 ? (
				<>
					<h1>r</h1>
					<h1>r</h1>
					<h1>{titulo}</h1>
					<h1>{encabezado}</h1>
					<h1>{subCategorias}</h1>

					<div className="contenedor">
						<div className="lista-de-productos">
							{productosFiltrados.map((producto) => (
								<div className="productos" key={producto.id}>
									<img className="logo-shoes" src={producto.logo} alt="" />
									<img className="shoes" src={producto.imageURL} alt={producto.name} />
									<div className="description-shoes">
										<h1>{producto.gender}</h1>
										<p>{producto.type}</p>
										<p>{producto.category}</p>
										<h3>{producto.name}</h3>
										<p className="description-shoes-par">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
											atque.
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
			) : categoriaNoEncontrada ? (
				<div>
					<h1>
						No se encontraron productos en {subCategorias} de {titulo}
					</h1>
					<h1>
						No se encontraron productos en {subCategorias} de {titulo}
					</h1>
					<h1>
						No se encontraron productos en {subCategorias} de {titulo}
					</h1>
				</div>
			) : (
				<div>No se encontraron productos</div>
			)}
		</>
	);
};

export default Elementos;
