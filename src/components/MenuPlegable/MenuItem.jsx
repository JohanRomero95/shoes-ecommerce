import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "../MenuPlegable/MenuItem.css";

const MenuItem = ({ titulo, submenu, toggleSubMenu, toggleMenu }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);
	const hasColeccion = titulo.includes("Colección");
	const tituloClass = `contenedor--menu ${hasColeccion ? "coleccioon" : ""}`;

	const handleMouseEnter = () => {
		setShowSubMenu(true);
		toggleSubMenu(titulo);
	};

	const handleMouseLeave = () => {
		setShowSubMenu(false);
	};
	const handleToggleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
		toggleSubMenu(titulo);
	};

	const handleClick = () => {
		toggleSubMenu(titulo);
		toggleMenu(false);
	};

	return (
		<header
			className="header--titulo"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			title={`${titulo}`}
			alt={`${titulo}`}>
			<Link
				className="navbar--center-titulo"
				to={`/${titulo}`}
				title={`${titulo}`}
				onClick={handleClick}>
				<span>{titulo}</span>
				{!hasColeccion && (
					<>
						{showSubMenu ? (
							<FaChevronDown className="navbar--center-svg" onClick={handleToggleSubMenu} />
						) : (
							<FaChevronRight className="navbar--center-svg" onClick={handleToggleSubMenu} />
						)}
					</>
				)}
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
									onClick={handleClick}
									to={`/${titulo}/${submenuItem.encabezado}`}>
									{submenuItem.encabezado}
								</Link>

								<ul className="contenedor--menu-articulo-lista">
									{submenuItem.subCategorias.map((sl, slIndex) => (
										<Link
											onClick={handleClick}
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
