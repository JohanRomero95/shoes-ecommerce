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

	const handleClick = (index) => {
		setSelectedButtons({ [index]: true });
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

	const changeColor = (color) => {
		setShoeColor(color);
	};

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
							{producto.gallery &&
								producto.gallery.map((img, index) => (
									<div className="contenedor--miniatura">
										<img
											key={index}
											src={img}
											alt={producto.name}
											title={producto.name}
											onClick={() => setSelectedGalleryImage(index)}
											style={{
												border:
													selectedGalleryImage === index ? "1px solid black" : "none",
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

						<img
							className="producto--imagen"
							src={producto.imageURL}
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
						<div className="detalle-producto">
							<div>
								<h1>{producto.name}</h1>
								<p>
									{producto.submenu} para {producto.gender}
								</p>
								<p>
									<strong>Marca:</strong> {producto.brand}
								</p>
								<p>
									<strong>Categoría: </strong>
									{producto.category}
								</p>
								{producto.colors && producto.colors.length > 0 ? (
									<>
										<p>
											<strong>Colores</strong>
										</p>
										<div className="color-optiones">
											{producto.colors &&
												producto.colors.map((color, index) => (
													<div
														key={index}
														className={`color-optione ${color.toLowerCase()}`}
														onClick={() => changeColor(color)}
														style={{
															backgroundColor: color,
														}}></div>
												))}
										</div>
									</>
								) : null}
								<p>
									<strong>Selecciona tu talla</strong>
								</p>
								<div className="tallas">
									{producto.tallas &&
										producto.tallas.map((talla, index) => (
											<button
												key={index}
												className={
													selectedButtons[index]
														? "selected-button grid-item"
														: "grid-item"
												}
												onClick={() => handleClick(index)}>
												{talla.eu}
											</button>
										))}
								</div>
								<p>
									<strong>Precio:</strong> ${agregarNueves(producto.price)}
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
