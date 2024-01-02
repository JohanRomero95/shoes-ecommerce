import { useState } from "react";
import { Link } from "react-router-dom";
import "../MenuPlegable/MenuItem.css";
import PropTypes from "prop-types";

const MenuItem = ({ titulo, submenu }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
	};

	return (
		<div onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
			<Link to={titulo}>{titulo}</Link>
			{showSubMenu && submenu && (
				<div className="contenedor--menu">
					<div className="contenedor--menu-articulo">
						{/*ME SIRVE PARA HACER RESPONSIVE DESIGN*/}
						{submenu.map((submenuItem, subIndex) => (
							<div key={subIndex} className="contenedor--menu-articulo-inicio">
								<h3 className="contenedor--menu-articulo-titulo">
									<Link to={submenuItem.encabezado}>{submenuItem.encabezado}</Link>
								</h3>

								<ul className="contenedor--menu-articulo-lista">
									{submenuItem.subCategorias.map((sl, slIndex) => (
										<Link to={sl.nombre} key={slIndex}>
											{sl.nombre}
										</Link>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

// Define la estructura de los props esperados
MenuItem.propTypes = {
	titulo: PropTypes.string.isRequired,
	submenu: PropTypes.array.isRequired,
};
export default MenuItem;
