import "./Footer.css";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer-contenedor">
			<div className="footer-top">
				<div className="ubicacion">
					<h2>Ubicación</h2>
					<h3>Buscar Tienda</h3>
					<h3>Hazte Miembro</h3>
				</div>
				<div className="ayuda">
					<h2>Ayuda</h2>
					<p>Centro de ayuda</p>
				</div>
				<div className="acerca">
					<h2>Acerca de Nosotros</h2>
					<p>Noticias</p>
					<p>Empleos</p>
					<p>Inversionistas</p>
					<p>Sustentabilidad</p>
				</div>
				<div className="eventos">
					<h2>Eventos sneakers</h2>
					<p>Live Shopping</p>
					<p>Cyber Monday</p>
					<p>Black Friday</p>
					<p>Members Days</p>
					<p>NRC Santiago</p>
				</div>
				<div className="redes">
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
						aria-label="Instagram">
						<FaInstagram />
					</a>
					<a
						href="https://web.whatsapp.com/"
						target="_blank"
						rel="noopener noreferrer"
						title="Whatsapp"
						aria-label="Whatsapp">
						<FaWhatsapp />
					</a>
					<a
						href="https://linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
						title="Linkedin"
						aria-label="Linkedin">
						<FaLinkedinIn />
					</a>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook"
						aria-label="Facebook">
						<FaFacebookF />
					</a>
				</div>
			</div>
			<hr />
			<div className="footer-bottom">
				<div className="derechos">
					<h2>
						<FaMapMarkerAlt className="icons" />
						Chile
					</h2>
					<a href="https://johanromero.vercel.app">
						© 2023 JR Company. Todos los derechos reservados
					</a>
				</div>
				<div className="terminos">
					<p>Términos y Condiciones</p>
					<p>Terminos Cyber Monday</p>
					<p>Terminos de uso</p>
					<p>Terminos de venta</p>
					<p>Política de privacidad y cookies</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
