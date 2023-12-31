import { Link } from "react-router-dom";

const MenuPlegable = () => {
	const links = [
		{
			titulo: "Collections",
			submenu: true,
			categorias: [
				{
					encabezado: "Novedades para Hombres",
					subCategorias: [
						{ nombre: "Zapatillas" },
						{ nombre: "Ropa" },
						{ nombre: "Accesorios y Equipo" },
						{ nombre: "Todo Hombre" },
					],
				},
			],
		},
		{ nombre: "Men" },
		{ nombre: "Women" },
		{ nombre: "Kid's" },
	];

	return (
		<>
			{links.map((menu, index) => (
				<div key={index}>
					<div>
						<Link to={menu.titulo}>{menu.titulo}</Link>
						{menu.submenu && (
							<div>
								<div>
									{menu.categorias.map((submenu, subIndex) => (
										<div key={subIndex}>
											<h1 className="encabezado-submenu">
												<Link to={submenu.encabezado}>{submenu.encabezado}</Link>
											</h1>
											<ul>
												{submenu.subCategorias.map((sl, slIndex) => (
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
				</div>
			))}
		</>
	);
};

export default MenuPlegable;
