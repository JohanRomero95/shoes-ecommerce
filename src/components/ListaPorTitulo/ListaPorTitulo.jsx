import { useProductos } from "../Call/useProductos";
import { Link, useParams } from "react-router-dom";
import Card from "../Cards/Card";
import "../Cards/Card.css";

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
			<div className="container">
				<div>
					<h1 className="titulo--paginas">
						{titulo.includes("Colección")
							? "Todo los productos"
							: `Todo los productos para {titulo}`}
					</h1>
				</div>
				<div className="lista-de-productos">
					{productosFiltradosPorTitulo.map((producto) => (
						<Link key={producto.id} to={`/producto/${producto.id}`}>
							<Card {...producto} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default ListaPorTitulo;
