import { useParams } from "react-router-dom";
import { useProductos } from "../Call/useProductos";
import Card from "../Cards/Card";

const FiltroPorSubCategoria = () => {
	const { encabezado, subCategorias, titulo } = useParams();
	const productos = useProductos();

	// Filtrar dinámicamente los productos según la categoría o el género
	const filtrarProductos = productos.filter((producto) => {
		return (
			producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() &&
			producto.submenu.toLowerCase().trim() === encabezado.toLowerCase().trim()
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
		subCategorias !== `Todo ${encabezado}` &&
		!filtrarProductos.some(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);

	return (
		<>
			{productosFiltrados.length > 0 ? (
				<>
					<div className="contenedor">
						{}
						<h1>
							{subCategorias} de {titulo}
						</h1>
						<div className="lista-de-productos">
							{productosFiltrados.map((producto) => (
								<Card key={producto.id} {...producto} />
							))}
						</div>
					</div>
				</>
			) : categoriaNoEncontrada ? (
				<div className="contenedor">
					<h1 className="not-found">
						No se encontraron productos en {subCategorias} de {titulo}
						<box-icon name="error-circle" animation="tada" size="lg"></box-icon>
					</h1>
				</div>
			) : (
				<div>No se encontraron productos</div>
			)}
		</>
	);
};
export default FiltroPorSubCategoria;
