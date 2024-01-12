import { useProductos } from "../Call/useProductos";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";

const ListaPorTitulo = () => {
	const productos = useProductos();
	const { titulo } = useParams();

	const productosFiltradosPorTitulo =
		titulo === "Colección"
			? productos
			: productos.filter(
					(producto) => producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim(),
			);

	return (
		<>
			<div className="contenedor">
				<h1>Todo los productos para {titulo}</h1>
				<div className="lista-de-productos">
					{productosFiltradosPorTitulo.map((producto) => (
						<Card key={producto.id} {...producto} />
					))}
				</div>
			</div>
		</>
	);
};
export default ListaPorTitulo;
