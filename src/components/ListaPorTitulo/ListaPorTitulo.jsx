import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import "../Cards/Card.css";
import OrderIcon from "../Order/OrderIcon";
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

	const productosOrdenados = ordenMenorAMayor
		? [...productosFiltradosPorTitulo].sort((a, b) => {
				const precioA = a.has_offer ? a.price - (a.price * a.offer_percentage) / 100 : a.price;
				const precioB = b.has_offer ? b.price - (b.price * b.offer_percentage) / 100 : b.price;
				return precioA - precioB;
		  })
		: ordenMayorAMenor
		? [...productosFiltradosPorTitulo].sort((a, b) => {
				const precioA = a.has_offer ? a.price - (a.price * a.offer_percentage) / 100 : a.price;
				const precioB = b.has_offer ? b.price - (b.price * b.offer_percentage) / 100 : b.price;
				return precioB - precioA;
		  })
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
			<main className="contenedor">
				<header className="contenedor--encabezado">
					<h4 className="titulo--paginas">
						{titulo.includes("Colección")
							? "Todos los productos"
							: `Todos los productos para ${titulo}`}
					</h4>
					<OrderIcon
						toggleFiltro={toggleFiltro}
						filtroAbierto={filtroAbierto}
						ordenMenorAMayor={ordenMenorAMayor}
						ordenMayorAMenor={ordenMayorAMenor}
						handleMenorAMayorChange={handleMenorAMayorChange}
						handleMayorAMenorChange={handleMayorAMenorChange}
						title="Ordenar productos"
						aria-label="Ordenar productos"
					/>
				</header>
				<section className="lista-de-productos">
					{productosOrdenados.map((producto) => (
						<Card
							key={producto.id}
							{...producto}
							alt={`Imagen de ${producto.name}`}
							title={`Ver detalles de ${producto.name}`}
							aria-label={`Ver detalles de ${producto.name}`}
						/>
					))}
				</section>
			</main>
		</>
	);
};

export default ListaPorTitulo;
