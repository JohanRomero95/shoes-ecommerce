import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuPlegable.css";
import { dataSubMenu } from "./SubMenu/dataSubMenu";
import { SubMenu } from "./SubMenu/SubMenu";

const MenuItem = ({ titulo, submenu }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
	};

	return (
		<div className="completo" onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
			<Link to={titulo}>{titulo}</Link>
			{showSubMenu && submenu && (
				<div className="ccds">
					<div className="ccds-c"></div>
					<div className="ccds-ccc">
						{submenu.map((submenuItem, subIndex) => (
							<div key={subIndex}>
								<h5 className="encabezado-submenu">
									<Link to={submenuItem.encabezado}>{submenuItem.encabezado}</Link>
								</h5>
								<ul className="lista-desordenada">
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

<SubMenu />;
