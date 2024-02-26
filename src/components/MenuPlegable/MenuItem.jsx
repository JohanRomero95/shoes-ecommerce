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
		<header
			onMouseEnter={toggleSubMenu}
			onMouseLeave={toggleSubMenu}
			title={`${titulo}`}
			alt={`${titulo}`}
			aria-expanded={showSubMenu ? "true" : "false"}>
			<Link className="navbar--center-titulo" to={`/${titulo}`}>
				{titulo}
			</Link>
			{showSubMenu && submenu && (
				<div className={tituloClass}>
					<div className="contenedor--menu-articulo">
						{submenu.map((submenuItem, subIndex) => (
							<div
								key={subIndex}
								className="contenedor--menu-articulo-inicio"
								title={`${submenuItem.encabezado}`}>
								<Link
									className="contenedor--menu-articulo-titulo"
									to={`/${titulo}/${submenuItem.encabezado}`}>
									{submenuItem.encabezado}
								</Link>

								<ul className="contenedor--menu-articulo-lista">
									{submenuItem.subCategorias.map((sl, slIndex) => (
										<Link
											to={`/${titulo}/${submenuItem.encabezado}/${sl.nombre}`}
											title={`${sl.nombre}`}
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
		</header>
	);
};

MenuItem.propTypes = {
	titulo: PropTypes.string.isRequired,
	submenu: PropTypes.array.isRequired,
};

export default MenuItem;
