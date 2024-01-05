import { useParams } from "react-router-dom";

const NovedadesProductos = () => {
	const { encabezado } = useParams();

	// Verificar si la sección seleccionada es 'Novedades para Mujer'
	if (encabezado) {
		return (
			<div>
				<h1>Esta página solo muestra Zapatillas para Mujer</h1>
				<h1>Esta página solo muestra Zapatillas para Mujer</h1>
				<h1>Esta página solo muestra Zapatillas para Mujer</h1>
				<h1>Esta página solo muestra Zapatillas para Mujer</h1>
			</div>
		);
	}
};

export default NovedadesProductos;
