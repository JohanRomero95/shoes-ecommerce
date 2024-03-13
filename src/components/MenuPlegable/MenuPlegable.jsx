import { dataSubMenu } from "../../data/dataSubMenu";
import MenuItem from "./MenuItem";

const MenuPlegable = ({ toggleSubMenu, toggleMenu }) => {
	const links = dataSubMenu;

	return (
		<>
			{links.map((menu, index) => (
				<MenuItem
					key={index}
					titulo={menu.titulo}
					submenu={menu.submenu || []}
					toggleSubMenu={toggleSubMenu}
					toggleMenu={toggleMenu}
				/>
			))}
		</>
	);
};

export default MenuPlegable;
