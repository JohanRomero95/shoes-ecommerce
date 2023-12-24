import "./Footer.css";
import "boxicons";

const Footer = () => {
	return (
		<div className="footer-contenedor">
			<div className="footer-top">
				<div className="ubicacion">
					<h3>Buscar Tienda</h3>
					<h3>Hazte Miembro</h3>
				</div>
				<div className="ayuda">
					<h3>Ayuda</h3>
					<p>Centro de ayuda</p>
				</div>
				<div className="acerca">
					<h3>Acerca de Nosotros</h3>
					<p>Noticias</p>
					<p>Empleos</p>
					<p>Inversionistas</p>
					<p>Sustentabilidad</p>
				</div>
				<div className="eventos">
					<h3>Eventos sneakers</h3>
					<p>Live Shopping</p>
					<p>Cyber Monday</p>
					<p>Black Friday</p>
					<p>Members Days</p>
					<p>NRC Santiago</p>
				</div>
				<div className="redes">
					<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
						<box-icon
							name="instagram"
							type="logo"
							size="md"
							border="circle"
							color="#7e7e7e"></box-icon>
					</a>
					<a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
						<box-icon
							type="logo"
							name="whatsapp"
							size="md"
							border="circle"
							color="#7e7e7e"></box-icon>
					</a>
					<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
						<box-icon
							name="linkedin"
							type="logo"
							size="md"
							border="circle"
							color="#7e7e7e"></box-icon>
					</a>
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<box-icon
							name="facebook"
							type="logo"
							size="md"
							border="circle"
							color="#7e7e7e"></box-icon>
					</a>
				</div>
			</div>
			<hr />
			<div className="footer-bottom">
				<div className="derechos">
					<h2>
						<box-icon name="map" type="solid" pull="left" size="sm" color="#ffff"></box-icon>
						Chile
					</h2>
					<p>© 2023 JR Company. Todos los derechos reservados</p>
				</div>
				<div className="terminos">
					<p>Terminos Cyber Monday</p>
					<p>Terminos de uso</p>
					<p>Terminos de venta</p>
					<p>Politica de privacidad y cookies</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
