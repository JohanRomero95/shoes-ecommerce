import { useParams } from "react-router-dom";

const DetalleProducto = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>{id}</h1>
			<h1>{id}</h1>
			<h1>{id}</h1>
			<h1>{id}</h1>
			<h1>{id}</h1>
		</div>
	);
};

export default DetalleProducto;
