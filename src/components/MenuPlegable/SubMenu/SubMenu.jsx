import MenuItem from "./MenuItem"; // Asegúrate de que la ruta sea correcta
import { dataSubMenu } from "./SubMenu/dataSubMenu"; // Suponiendo que dataSubMenu está en un archivo separado

const SubMenu = () => {
	const MenuPlegable = () => {
		const links = dataSubMenu;
		return (
			<>
				{links.map((menu, index) => (
					<MenuItem key={index} titulo={menu.titulo} submenu={menu.submenu} />
				))}
			</>
		);
	};

	return <MenuPlegable />;
};

export default SubMenu;
