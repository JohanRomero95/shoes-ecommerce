import { dataSubMenu } from "../../data/dataSubMenu";
import MenuItem from "./MenuItem";

const MenuPlegable = ({ toggleSubMenu }) => {
	const links = dataSubMenu;

	return (
		<>
			{links.map((menu, index) => (
				<MenuItem
					key={index}
					titulo={menu.titulo}
					submenu={menu.submenu || []}
					toggleSubMenu={toggleSubMenu}
				/>
			))}
		</>
	);
};

export default MenuPlegable;
