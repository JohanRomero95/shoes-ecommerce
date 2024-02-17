import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../../helpers/datos";
import "./DetalleProducto.css";
import { agregarNueves } from "../../helpers/agregarNueves";

const DetalleProducto = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [shoeColor, setShoeColor] = useState("");
	const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
	const [selectedButtons, setSelectedButtons] = useState({});
	const [hoveredSize, setHoveredSize] = useState(null);

	// Hover tallas
	// const handleSizeHover = (size) => {
	// 	setHoveredSize(size);
	// };

	// Galeria
	const handleClick = (index) => {
		const nextIndex = (index - 1) % producto.gallery.length;
		setSelectedGalleryImage(nextIndex);
	};

	// Talla
	const handleClickTalla = (index) => {
		setSelectedButtons({ [index]: true });
	};

	// Colores
	const changeColor = (color) => {
		setShoeColor(color);
		setSelectedButtons({ [color]: true });
	};

	useEffect(() => {
		const obtenerProducto = async () => {
			try {
				const item = await pedirItemPorId(parseInt(id));
				setProducto(item);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		obtenerProducto();
	}, [id]);

	useEffect(() => {
		if (producto && producto.colors && producto.colors.length > 0) {
			setShoeColor(producto.colors[0]);
		}
	}, [producto]);

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="containere">
			{producto ? (
				<div className="name">
					<div className="producto">
						<div className="miniatura">
							{[producto.imageURL || [], ...producto.gallery].map((img, index) => (
								<div className="contenedor--miniatura" key={index}>
									<img
										src={img}
										alt={producto.name}
										title={producto.name}
										onClick={() => handleClick(index)}
										style={{
											border:
												selectedGalleryImage === index - 1 ? "1px solid black" : "none",
											filter: `hue-rotate(${
												shoeColor
													? (producto.colors.indexOf(shoeColor) + 2) *
													  (360 / producto.colors.length)
													: 0
											}deg)`,
										}}
									/>
								</div>
							))}
						</div>
						<div className="producto--contenedor">
							<img
								className="producto--imagen"
								src={producto.gallery[selectedGalleryImage] || producto.imageURL}
								alt={producto.name}
								title={producto.name}
								style={{
									filter: `hue-rotate(${
										shoeColor
											? (producto.colors.indexOf(shoeColor) + 2) *
											  (360 / producto.colors.length)
											: 0
									}deg)`,
								}}
							/>
						</div>
						<div className="detalle-producto">
							<div>
								<h1>{producto.name}</h1>
								<p className="detalle-producto--genero">
									{producto.submenu} para {producto.gender}
								</p>
								<div className="detalle-producto--description">
									<p className="detalle-producto--description---credito">
										Hasta 3 x ${(agregarNueves(producto.price) / 3).toFixed(3)} sin
										interés
									</p>

									{producto.colors && producto.colors.length > 0 ? (
										<div className="detalle-producto--description---colores">
											<p>
												<strong>Colores</strong>
											</p>
											<div className="color-optiones">
												{producto.colors.map((color, index) => (
													<img
														key={index}
														src={producto.imageURL}
														alt={producto.name}
														className={`color-optione ${color.toLowerCase()} ${
															selectedButtons[color] ? "selected-button" : ""
														}`}
														onClick={() => changeColor(color)}
														style={{
															filter: `hue-rotate(${
																(producto.colors.indexOf(color) + 2) *
																(360 / producto.colors.length)
															}deg)`,
															border: selectedButtons[color]
																? "1px solid black"
																: "none",
														}}
													/>
												))}
											</div>
										</div>
									) : null}
									<p>
										<strong>Selecciona tu talla</strong>
									</p>
									<div className="tallas">
										{producto.tallas &&
											producto.tallas.map((talla, index) => (
												<div key={index} className="talla-container">
													<button
														className={
															selectedButtons[index]
																? "selected-button grid-item"
																: "grid-item"
														}
														onClick={() => handleClickTalla(index)}>
														{talla.eu}
													</button>
													<div className="talla-info">
														<div className="talla-info--division">
															<p className="talla-info--nacional">
																{talla.eu} <hr /> <span>TALLA CL</span>
															</p>
															<div className="talla-info--internacional">
																<p>
																	<span>CM</span> {talla.cm}
																</p>
																<p>
																	<span>US</span> {talla.us}
																</p>
															</div>
														</div>
													</div>
												</div>
											))}
									</div>
								</div>

								<p className="precio">
									<strong>${agregarNueves(producto.price)}</strong>
								</p>
							</div>
							<button className="btn--carrito">Add to cart</button>
						</div>
					</div>
				</div>
			) : (
				<div>No se encontró el producto.</div>
			)}
		</div>
	);
};

export default DetalleProducto;
