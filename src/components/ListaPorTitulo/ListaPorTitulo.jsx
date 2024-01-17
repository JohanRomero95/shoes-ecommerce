import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Cards/Card";
import "../Cards/Card.css";
import OrderIcon from "../Order/OrderIcon"; // Ajusta la ruta según tu estructura de carpetas
import { useProductos } from "../Call/useProductos";

const ListaPorTitulo = () => {
	const [filtroAbierto, setFiltroAbierto] = useState(false);
	const [ordenMenorAMayor, setOrdenMenorAMayor] = useState(false);
	const [ordenMayorAMenor, setOrdenMayorAMenor] = useState(false);

	const productos = useProductos();
	const { titulo } = useParams();

	const productosFiltradosPorTitulo =
		titulo === "Colección"
			? productos
			: productos.filter(
					(producto) => producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim(),
			  );

	// Aplicar ordenamiento según el estado
	const productosOrdenados = ordenMenorAMayor
		? [...productosFiltradosPorTitulo].sort((a, b) => a.price - b.price)
		: ordenMayorAMenor
		? [...productosFiltradosPorTitulo].sort((a, b) => b.price - a.price)
		: productosFiltradosPorTitulo;

	const toggleFiltro = () => {
		setFiltroAbierto(!filtroAbierto);
	};

	const handleMenorAMayorChange = () => {
		setOrdenMenorAMayor(!ordenMenorAMayor);
		setOrdenMayorAMenor(false);
	};

	const handleMayorAMenorChange = () => {
		setOrdenMayorAMenor(!ordenMayorAMenor);
		setOrdenMenorAMayor(false);
	};

	return (
		<>
			<div className="container">
				<div className="container--encabezado">
					<h1 className="titulo--paginas">
						{titulo.includes("Colección")
							? "Todo los productos"
							: `Todo los productos para ${titulo}`}
					</h1>
					<OrderIcon
						toggleFiltro={toggleFiltro}
						filtroAbierto={filtroAbierto}
						ordenMenorAMayor={ordenMenorAMayor}
						ordenMayorAMenor={ordenMayorAMenor}
						handleMenorAMayorChange={handleMenorAMayorChange}
						handleMayorAMenorChange={handleMayorAMenorChange}
					/>
				</div>
				<div className="lista-de-productos">
					{productosOrdenados.map((producto) => (
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
