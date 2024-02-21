import { useState } from "react";
import { Link } from "react-router-dom";
import "../MenuPlegable/MenuItem.css";
import PropTypes from "prop-types";

const MenuItem = ({ titulo, submenu }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
	};

	const hasColeccion = titulo.includes("Colección");
	const tituloClass = `contenedor--menu ${hasColeccion ? "coleccioon" : ""}`;

	return (
		<div onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
			<Link className="navbar--center-titulo" to={`/${titulo}`}>
				{/* 			<Link className={tituloClass} to={`/${titulo}`}>
				 */}{" "}
				{titulo}
			</Link>
			{showSubMenu && submenu && (
				<div className={tituloClass}>
					<div className="contenedor--menu-articulo">
						{submenu.map((submenuItem, subIndex) => (
							<div key={subIndex} className="contenedor--menu-articulo-inicio">
								<Link
									className="contenedor--menu-articulo-titulo"
									to={`/${titulo}/${submenuItem.encabezado}`}>
									{submenuItem.encabezado}
								</Link>

								<ul className="contenedor--menu-articulo-lista">
									{submenuItem.subCategorias.map((sl, slIndex) => (
										<Link
											to={`/${titulo}/${submenuItem.encabezado}/${sl.nombre}`}
											key={slIndex}>
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

MenuItem.propTypes = {
	titulo: PropTypes.string.isRequired,
	submenu: PropTypes.array.isRequired,
};

export default MenuItem;
