import { Link } from "react-router-dom";

const MenuPlegable = () => {
	const links = [{ name: "Collections" }, { name: "Men" }, { name: "Women" }, { name: "Kid's" }];

	return (
		<>
			{links.map((link, index) => (
				<div key={index} className="navbar-center">
					<ul>
						<li>
							<Link to={link.name}>{link.name}</Link>
						</li>
					</ul>
				</div>
			))}
		</>
	);
};

export default MenuPlegable;
