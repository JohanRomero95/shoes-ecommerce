import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import "../Cards/Card.css";
import OrderFilter from "../Order/OrderIcon"; // Ajusta la ruta según tu estructura de carpetas
import { useProductos } from "../Call/useProductos";

const FiltroPorEncabezado = () => {
	const { titulo, encabezado } = useParams();
	const productos = useProductos();

	let productosFiltradosPorEncabezado;

	if (encabezado.toLowerCase().includes("novedades para hombre")) {
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "hombre",
		);
	} else if (encabezado.toLowerCase().includes("novedades para mujer")) {
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "mujer",
		);
	} else if (encabezado.toLowerCase().includes("novedades para niños")) {
		productosFiltradosPorEncabezado = productos.filter(
			(producto) => producto.gender.toLowerCase().trim() === "niños",
		);
	} else {
		productosFiltradosPorEncabezado = productos.filter(
			(producto) =>
				encabezado.toLowerCase().trim() === producto.submenu.toLowerCase().trim() &&
				titulo.toLowerCase().trim() === producto.gender.toLowerCase().trim(),
		);
	}

	const [filtroAbierto, setFiltroAbierto] = useState(false);
	const [ordenMenorAMayor, setOrdenMenorAMayor] = useState(false);
	const [ordenMayorAMenor, setOrdenMayorAMenor] = useState(false);

	// Aplicar ordenamiento según el estado
	const productosOrdenados = ordenMenorAMayor
		? [...productosFiltradosPorEncabezado].sort((a, b) => a.price - b.price)
		: ordenMayorAMenor
		? [...productosFiltradosPorEncabezado].sort((a, b) => b.price - a.price)
		: productosFiltradosPorEncabezado;

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
						{encabezado.toLowerCase().includes("ropa niño") ||
						encabezado.toLowerCase().includes("ropa niña")
							? encabezado.replace("ropa niño", "")
							: `${encabezado} de ${titulo}`}
					</h1>
					<OrderFilter
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
						<Card key={producto.id} {...producto} />
					))}
				</div>
			</div>
		</>
	);
};

export default FiltroPorEncabezado;
