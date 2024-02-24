import { FaSliders } from "react-icons/fa6";

const OrderIcon = ({
	toggleFiltro,
	filtroAbierto,
	ordenMenorAMayor,
	ordenMayorAMenor,
	handleMenorAMayorChange,
	handleMayorAMenorChange,
}) => {
  
	return (
		<>
			<FaSliders onClick={toggleFiltro} />
			{filtroAbierto && (
				<div className="filtro-contenedor">
					<div className="checkbox-container">
						<label>
							<input
								type="checkbox"
								checked={ordenMenorAMayor}
								onChange={handleMenorAMayorChange}
							/>
							Precio Más Bajo
						</label>
					</div>
					<div className="checkbox-container">
						<label>
							<input
								type="checkbox"
								checked={ordenMayorAMenor}
								onChange={handleMayorAMenorChange}
							/>
							Precio Más Alto
						</label>
					</div>
				</div>
			)}
		</>
	);
};

export default OrderIcon;
