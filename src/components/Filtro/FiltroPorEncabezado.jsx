import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import { useProductos } from "../Call/useProductos";

const FiltroPorEncabezado = () => {
	const { titulo, encabezado } = useParams();
	const productos = useProductos();

	let productosFiltradosPorEncabezado;

	if (encabezado.toLowerCase().includes("novedades para hombre")) {
		// Filtrar productos solo por el género "Hombre"
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "hombre",
		);
	} else if (encabezado.toLowerCase().includes("novedades para mujer")) {
		// Filtrar productos solo por el género "Mujer"
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "mujer",
		);
	} else if (encabezado.toLowerCase().includes("novedades para niños")) {
		// Filtrar productos solo por el género "Ninios"
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "niños",
		);
	} else {
		// Filtrar productos por el encabezado
		productosFiltradosPorEncabezado = productos.filter(
			(producto) =>
				encabezado.toLowerCase().trim() === producto.submenu.toLowerCase().trim() &&
				titulo.toLowerCase().trim() === producto.gender.toLowerCase().trim(),
		);
	}

	return (
		<>
			<div className="contenedor">
				<h1>
					{encabezado.toLowerCase().includes("ropa niño") ||
					encabezado.toLowerCase().includes("ropa niña")
						? encabezado.replace("ropa niño", "")
						: `${encabezado} de ${titulo}`}
				</h1>
				<div className="lista-de-productos">
					{productosFiltradosPorEncabezado.map((producto) => (
						<Card key={producto.id} {...producto} />
					))}
				</div>
			</div>
		</>
	);
	// encabezado.toLowerCase().includes("Novedades para hombres")
};

export default FiltroPorEncabezado;
