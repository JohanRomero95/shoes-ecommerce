import { useProductos } from "../Call/useProductos";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";

const ListaDeProductos = () => {
	const productos = useProductos();
	const { titulo } = useParams();

	let productosFiltradosPorTitulo = productos;

	if (titulo != "Colección") {
		productosFiltradosPorTitulo = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim(),
		);
		return productosFiltradosPorTitulo;
	}

	// if (encabezado.toLowerCase().includes(`${titulo}`);
	return (
		<>
			<div className="contenedor">
				<div className="lista-de-productos">
					{productosFiltradosPorTitulo.map((producto) => (
						<Card key={producto.id} {...producto} />
					))}
				</div>
			</div>
		</>
	);
};
export default ListaDeProductos;
