import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductos } from "../Call/useProductos";
import Card from "../Cards/Card";
import "../Cards/Card.css";
import OrderFilter from "../Order/OrderIcon"; // Ajusta la ruta según tu estructura de carpetas
import { MdErrorOutline } from "react-icons/md";

const FiltroPorSubCategoria = () => {
	const { titulo, encabezado, subCategorias } = useParams();
	const productos = useProductos();

	// Filtrar dinámicamente los productos según la categoría y el género
	const filtrarProductos = productos.filter((producto) => {
		return (
			producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() &&
			producto.submenu.toLowerCase().trim() === encabezado.toLowerCase().trim()
		);
	});

	// Filtrar los productos por la categoría
	let productosFiltrados;

	if (
		encabezado.toLowerCase() === "novedades para hombre" &&
		subCategorias.toLowerCase() === "zapatillas"
	) {
		productosFiltrados = filtrarProductos;
	} else if (subCategorias !== `Todo ${encabezado}` && subCategorias !== `Todo Ropa`) {
		productosFiltrados = filtrarProductos.filter(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);
	} else {
		productosFiltrados = filtrarProductos;
	}

	const [filtroAbierto, setFiltroAbierto] = useState(false);
	const [ordenMenorAMayor, setOrdenMenorAMayor] = useState(false);
	const [ordenMayorAMenor, setOrdenMayorAMenor] = useState(false);

	// Verificar si no se encontraron productos con la categoría deseada
	const categoriaNoEncontrada = !productosFiltrados.some(
		(producto) => producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
	);

	const productosOrdenados = ordenMenorAMayor
		? [...productosFiltrados].sort((a, b) => a.price - b.price)
		: ordenMayorAMenor
		? [...productosFiltrados].sort((a, b) => b.price - a.price)
		: productosFiltrados;

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
			{productosFiltrados.length > 0 ? (
				<>
					<main className="container">
						<div className="container--encabezado">
							<h1 className="titulo--paginas">
								{encabezado.toLowerCase().includes("ropa niña")
									? `${subCategorias} de ${titulo.replace("Niños", "Niñas")}`
									: `${subCategorias} de ${titulo}`}
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
					</main>
				</>
			) : categoriaNoEncontrada ? (
				<div className="contenedor">
					<h1 className="not-found">
						No se encontraron productos en {subCategorias} de {titulo}
						<MdErrorOutline className="icons" />
					</h1>
				</div>
			) : (
				<div>No se encontraron productos</div>
			)}
		</>
	);
};

export default FiltroPorSubCategoria;
