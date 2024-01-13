import { useParams } from "react-router-dom";
import { useProductos } from "../Call/useProductos";
import Card from "../Cards/Card";
import "../Cards/Card.css";

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
		console.log("Productos Filtrados:", productosFiltrados);
	} else if (subCategorias !== `Todo ${encabezado}` && subCategorias !== `Todo Ropa`) {
		productosFiltrados = filtrarProductos.filter(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);
	} else {
		productosFiltrados = filtrarProductos;
	}

	// Verificar si no se encontraron productos con la categoría deseada
	const categoriaNoEncontrada =
		// subCategorias !== `Todo ${encabezado}` &&
		!productosFiltrados.some(
			(producto) =>
				producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
		);

	// console.log(productosFiltrados);
	// console.log("Este es titulo -->", titulo);
	console.log("Este es encabezado -->", encabezado);
	console.log("Este es subCategorias -->", subCategorias);

	return (
		<>
			{productosFiltrados.length > 0 ? (
				<>
					<div className="container">
						<h1 className="titulo--paginas">
							{encabezado.toLowerCase().includes("ropa niña")
								? `${subCategorias} de ${titulo.replace("Niños", "Niñas")}`
								: `${subCategorias} de ${titulo}`}
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

// CODIGO PARA PROBAR
// import { useParams } from "react-router-dom";
// import { useProductos } from "../Call/useProductos";
// import Card from "../Cards/Card";
// import "../Cards/Card.css";

// const FiltroPorSubCategoria = () => {
//   const { titulo, encabezado, subCategorias } = useParams();
//   const productos = useProductos();

//   // Filtrar dinámicamente los productos según la categoría y el género
//   const filtrarProductos = productos.filter((producto) => {
//     return (
//       producto.gender.toLowerCase().trim() === titulo.toLowerCase().trim() &&
//       producto.submenu.toLowerCase().trim() === encabezado.toLowerCase().trim()
//     );
//   });

//   // Filtrar los productos por la categoría
//   let productosFiltrados;

//   if (
//     encabezado.toLowerCase() === "novedades para hombre" &&
//     subCategorias.toLowerCase() === "zapatillas"
//   ) {
//     productosFiltrados = filtrarProductos;
//     console.log("Productos Filtrados:", productosFiltrados);
//   } else if (subCategorias !== `Todo ${encabezado}` && subCategorias !== `Todo Ropa`) {
//     productosFiltrados = filtrarProductos.filter(
//       (producto) =>
//         producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
//     );
//   } else {
//     productosFiltrados = filtrarProductos;
//   }

//   // Verificar si no se encontraron productos con la categoría deseada
//   const categoriaNoEncontrada =
//     // subCategorias !== `Todo ${encabezado}` &&
//     !productosFiltrados.some(
//       (producto) =>
//         producto.category.toLowerCase().trim() === subCategorias.toLowerCase().trim(),
//     );

//   console.log("Este es encabezado -->", encabezado);
//   console.log("Este es subCategorias -->", subCategorias);

//   return (
//     <>
//       <div className="container">
//         <h1 className="titulo--paginas">
//           {encabezado.toLowerCase() === "novedades para hombre" &&
//           subCategorias.toLowerCase() === "zapatillas"
//             ? "Novedades para Hombre - Zapatillas"
//             : `${subCategorias} de ${titulo}`}
//         </h1>
//         <div className="lista-de-productos">
//           {productosFiltrados
//             .filter((producto) => producto.gender.toLowerCase() === "hombre")
//             .map((producto) => (
//               <Card key={producto.id} {...producto} />
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FiltroPorSubCategoria;
