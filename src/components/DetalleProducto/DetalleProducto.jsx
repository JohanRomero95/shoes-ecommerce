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
							<img src={producto.imageURL} alt={producto.name} />
							<img src={producto.imageURL} alt={producto.name} />

							<img src={producto.imageURL} alt={producto.name} />
							<img src={producto.imageURL} alt={producto.name} />
						</div>
						<img
							className="producto--imagen"
							src={producto.imageURL}
							alt={producto.name}
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
								<p>Marca: {producto.brand}</p>
								<p>Género: {producto.gender}</p>
								<p>Categoría: {producto.category}</p>
								<p>Precio: ${agregarNueves(producto.price)}</p>
								{producto.colors && producto.colors.length > 0 ? (
									<>
										<p>Colores:</p>
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
								<p>Selecciona tu talla</p>
								<div className="tallas">
									<button className="grid-item">7</button>
									<button className="grid-item">8</button>
									<button className="grid-item">9</button>
									<button className="grid-item">10</button>
									<button className="grid-item">9</button>
									<button className="grid-item">10</button> <button>9</button>
									<button className="grid-item">10</button>
									<button className="grid-item">9</button>
									<button className="grid-item">10</button>
									<button className="grid-item">9</button>
								</div>
							</div>
							<button>Add to cart</button>
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
