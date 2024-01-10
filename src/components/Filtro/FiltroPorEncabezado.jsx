import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import ListaDeProductos from "../ListaDeProductos/ListaPorTitulo";

const FiltroPorEncabezado = () => {
	const { titulo, encabezado } = useParams();

	// Obtener los productos filtrados por el título
	const productosFiltradosPorTitulo = ListaDeProductos(titulo);

	// Filtrar los productos filtrados por el encabezado
	const productosFiltradosPorEncabezado = productosFiltradosPorTitulo.filter(
		(producto) =>
			producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() &&
			producto.submenu.toLowerCase().trim() === encabezado.toLowerCase().trim(),
		// 	producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() Lo voy a dejar por si acaso
	);

	// if (productosFiltradosPorEncabezado === titulo.toLowerCase().trim()) {
	// 	return productosFiltradosPorTitulo;
	// }

	return (
		<>
			<div className="contenedor">
				<div className="lista-de-productos">
					{productosFiltradosPorEncabezado.map((producto) => (
						<Card key={producto.id} {...producto} />
					))}
				</div>
			</div>
		</>
	);
};

export default FiltroPorEncabezado;
