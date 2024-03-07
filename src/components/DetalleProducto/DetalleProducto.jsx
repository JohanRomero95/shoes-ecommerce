import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pedirItemPorId } from "../../helpers/datos";
import { agregarNueves } from "../../helpers/agregarNueves";
import { CarritoContext } from "../../context/CarritoContext";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { useTallaContext } from "../../context/TallaContext";
import "./DetalleProducto.css";

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
	const { setTallaSeleccionada } = useTallaContext(null);

	// Galeria
	const handleClick = (index) => {
		const nextIndex = (index - 1) % producto.gallery.length;
		setSelectedGalleryImage(nextIndex);
	};

	// Tallas
	const handleSelectTalla = (talla) => {
		const isTallaAvailable = producto.tallas.find((t) => t.eu === talla.eu && t.is_available);
		if (isTallaAvailable) {
			setTallaSeleccionada(producto.id, talla);
		} else {
			console.log("Talla no disponible");
		}
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
				<div className="responsive-structure">
					<section className="detalle-producto--titulo">
						<h1>{producto.name}</h1>
						<p className="detalle-producto--genero">
							<Link to={`/${producto.gender}/${producto.submenu}`}>
								{producto.submenu} para {producto.gender}
							</Link>
						</p>
					</section>

					<section className="producto--contenedor">
						<div className="detalle-producto--description---colores">
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
							{producto.colors && producto.colors.length > 0 ? (
								<div className="color-optionse">
									{producto.colors &&
										producto.colors.map((color, index) => (
											<div
												key={index}
												className={`color-option ${color.toLowerCase()}`}
												onClick={() => changeColor(color)}
												style={{
													backgroundColor: color,
												}}></div>
										))}
								</div>
							) : null}
						</div>
					</section>
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
									border: selectedGalleryImage === index - 1 ? "1px solid black" : "none",
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
					<div className="contenedor-de-tallas">
						<p>
							<strong>Selecciona tu talla</strong>
						</p>
						<div className="tallas">
							{producto.tallas &&
								producto.tallas.map((talla, index) => {
									const isAvailable = talla.is_available;
									const claseTalla = isAvailable
										? "talla-container"
										: "talla-container no-disponible";
									return (
										<div key={index} className={claseTalla}>
											<button
												onClick={() => handleSelectTalla(talla)}
												disabled={!isAvailable}>
												{talla.eu}
											</button>
											{isAvailable ? (
												<div className="talla-info">
													<div className="talla-info--division">
														<div className="talla-info--nacional">
															{talla.eu} <div className="hr-line"></div>
															<span>TALLA CL</span>
														</div>
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
											) : (
												<div className="talla-no-disponible"></div>
											)}
										</div>
									);
								})}
						</div>
					</div>
					<div className="contenedor-contador-precio">
						<p className="detalle-producto--description---credito">
							Hasta 3 x ${(agregarNueves(producto.price) / 3).toFixed(3)} sin interés
						</p>
						<div className="cont-precio">
							<div className="contador">
								<button onClick={handleClickRestar}>-</button>
								<p>{cantidadSeleccionada}</p>
								<button onClick={handleClickSumar}>+</button>
							</div>
							<p className="precio">
								<strong>${agregarNueves(producto.price)}</strong>
							</p>
						</div>
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
			) : (
				<div>No se encontró el producto.</div>
			)}
			{producto ? (
				<section className="producto">
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
									border: selectedGalleryImage === index - 1 ? "1px solid black" : "none",
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

					<section className="contenedor-detalle-producto">
						<header className="detalle-producto--titulo">
							<h1>{producto.name}</h1>
							<p className="detalle-producto--genero">
								<Link to={`/${producto.gender}/${producto.submenu}`}>
									{producto.submenu} para {producto.gender}
								</Link>
							</p>
						</header>
						{producto.colors && producto.colors.length > 0 ? (
							<div className="detalle-producto--description---colores">
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
												border: selectedButtons[color] ? "1px solid black" : "none",
											}}
										/>
									))}
								</div>
							</div>
						) : null}
						<div className="contenedor-de-tallas">
							<p>
								<strong>Selecciona tu talla</strong>
							</p>
							<div className="tallas">
								{producto.tallas &&
									producto.tallas.map((talla, index) => {
										const isAvailable = talla.is_available;
										const claseTalla = isAvailable
											? "talla-container"
											: "talla-container no-disponible";
										return (
											<div key={index} className={claseTalla}>
												<button
													onClick={() => handleSelectTalla(talla)}
													disabled={!isAvailable}>
													{talla.eu}
												</button>
												{isAvailable ? (
													<div className="talla-info">
														<div className="talla-info--division">
															<div className="talla-info--nacional">
																{talla.eu} <div className="hr-line"></div>
																<span>TALLA CL</span>
															</div>
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
												) : (
													<div className="talla-no-disponible"></div>
												)}
											</div>
										);
									})}
							</div>
						</div>

						<div className="contenedor-contador-precio">
							<p className="detalle-producto--description---credito">
								Hasta 3 x ${(agregarNueves(producto.price) / 3).toFixed(3)} sin interés
							</p>
							<div className="cont-precio">
								<div className="contador">
									<button onClick={handleClickRestar}>-</button>
									<p>{cantidadSeleccionada}</p>
									<button onClick={handleClickSumar}>+</button>
								</div>
								<p className="precio">
									<strong>${agregarNueves(producto.price)}</strong>
								</p>
							</div>
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
					</section>
				</section>
			) : (
				<div>No se encontró el producto.</div>
			)}
		</main>
	);
};

export default DetalleProducto;
