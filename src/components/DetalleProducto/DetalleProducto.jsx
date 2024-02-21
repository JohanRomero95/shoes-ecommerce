import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../../helpers/datos";
import { agregarNueves } from "../../helpers/agregarNueves";
import { CarritoContext } from "../../context/CarritoContext";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import "./DetalleProducto.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const DetalleProducto = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [shoeColor, setShoeColor] = useState("");
	const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
	const [selectedButtons, setSelectedButtons] = useState({});
	const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
	const { agregarAlCarrito, carrito } = useContext(CarritoContext);

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

	const handleClickSumar = () => {
		setCantidadSeleccionada((prevCantidad) => {
			const cantidadEnCarritoDelProducto = carrito.reduce((total, item) => {
				if (item.id === producto.id) {
					return total + item.cantidad;
				}
				return total;
			}, 0);

			if (prevCantidad + 1 > producto.stock - cantidadEnCarritoDelProducto) {
				// AGREGAR AQUI EL TOAST DE NO HAY STOCK

				return prevCantidad;
			} else {
				return prevCantidad + 1;
			}
		});
	};

	const handleClickRestar = () => {
		setCantidadSeleccionada(Math.max(cantidadSeleccionada - 1, 1));
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
		<main className="containere">
			{producto ? (
				<section className="condicion">
					<article className="producto">
						<section className="miniatura">
							{[producto.imageURL || [], ...producto.gallery].map((img, index) => (
								<img
									className="contenedor--miniatura"
									key={index}
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
							))}
						</section>

						<section className="producto--contenedor">
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
						</section>

						<section className="detalle-producto">
							<div className="contenedor-detalle-producto">
								<header className="detalle-producto--titulo">
									<h1>{producto.name}</h1>
									<p className="detalle-producto--genero">
										{producto.submenu} para {producto.gender}
									</p>
								</header>
								<div className="detalle-producto--description">
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
									<p className="detalle-producto--description---credito">
										Hasta 3 x ${(agregarNueves(producto.price) / 3).toFixed(3)} sin
										interés
									</p>
								</div>

								<div className="contenedor-contador-precio">
									<div className="contador">
										<button onClick={handleClickRestar}>-</button>
										<p>{cantidadSeleccionada}</p>
										<button onClick={handleClickSumar}>+</button>
									</div>
									<p className="precio">
										<strong>${agregarNueves(producto.price)}</strong>
									</p>
								</div>
								<ButtonSecondary
									title={
										<div className="extra">
											<span className="icon">
												<LiaCartArrowDownSolid strokeWidth=".7" size={20} />
											</span>
											<span>Add to cart</span>
										</div>
									}
									isSpecial
									onClick={() => {
										agregarAlCarrito(producto, cantidadSeleccionada);
									}}></ButtonSecondary>
							</div>
						</section>
					</article>
				</section>
			) : (
				<div>No se encontró el producto.</div>
			)}
		</main>
	);
};

export default DetalleProducto;
