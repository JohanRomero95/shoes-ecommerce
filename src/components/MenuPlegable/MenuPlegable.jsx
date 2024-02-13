import { dataSubMenu } from "../../data/dataSubMenu";
import MenuItem from "./MenuItem";

const MenuPlegable = () => {
	const links = dataSubMenu;
	return (
		<>
			{links.map((menu, index) => (
				<MenuItem key={index} titulo={menu.titulo} submenu={menu.submenu || []} />
			))}
		</>
	);
};

export default MenuPlegable;
