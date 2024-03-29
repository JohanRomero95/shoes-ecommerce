import { useState, useEffect } from "react";
import "./Footer.css";
import {
	FaMapMarkerAlt,
	FaFacebookF,
	FaLinkedinIn,
	FaWhatsapp,
	FaInstagram,
	FaPlus,
} from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";

const Footer = () => {
	const [ayudaExpanded, setAyudaExpanded] = useState(false);
	const [acercaExpanded, setAcercaExpanded] = useState(false);
	const [eventosExpanded, setEventosExpanded] = useState(false);

	const toggleAyuda = () => {
		setAyudaExpanded(!ayudaExpanded);
	};

	const toggleAcerca = () => {
		setAcercaExpanded(!acercaExpanded);
	};

	const toggleEventos = () => {
		setEventosExpanded(!eventosExpanded);
	};

	const isWideScreen = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		if (isWideScreen) {
			setAyudaExpanded(true);
			setAcercaExpanded(true);
			setEventosExpanded(true);
		}
	}, [isWideScreen]);

	return (
		<footer className="footer-contenedor">
			<section className="footer-top">
				<div className="ubicacion">
					<h2>Ubicaciones</h2>
					<h3>Buscar Tienda</h3>
					<h3>Hazte Miembro</h3>
				</div>
				<div className="ayuda">
					<div className="ayuda-title">
						<h3>Ayuda </h3>
						{!isWideScreen && (
							<span onClick={toggleAyuda}>
								<FaPlus />
							</span>
						)}
					</div>
					{ayudaExpanded && <p>Centro de ayuda</p>}
				</div>

				<div className="acerca">
					<div className="acerca-title">
						<h3>Acerca de Nosotros</h3>
						{!isWideScreen && (
							<span onClick={toggleAcerca}>
								<FaPlus />
							</span>
						)}
					</div>
					{acercaExpanded && (
						<>
							<p>Noticias</p>
							<p>Empleos</p>
							<p>Inversionistas</p>
							<p>Sostenibilidad</p>
						</>
					)}
				</div>

				<div className="eventos">
					<div className="eventos-title">
						<h3>Eventos sneakers</h3>
						{!isWideScreen && (
							<span onClick={toggleEventos}>
								<FaPlus />
							</span>
						)}
					</div>
					{eventosExpanded && (
						<>
							<p>Live Shopping</p>
							<p>Cyber Monday</p>
							<p>Black Friday</p>
							<p>Members Days</p>
							<p>NRC Santiago</p>
						</>
					)}
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
						title="LinkedIn"
						aria-label="LinkedIn">
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
			</section>
			<hr />
			<section className="footer-bottom">
				<div className="derechos">
					<h4>
						<FaMapMarkerAlt className="icons" />
						Chile
					</h4>
					<a
						href="https://johanromero.vercel.app"
						target="_blank"
						title="Portfolio del programador">
						© 2023 JR Company. Todos los derechos reservados
					</a>
				</div>
				<div className="terminos">
					<p>Términos y Condiciones</p>
					<p>Términos Cyber Monday</p>
					<p>Términos de uso</p>
					<p>Términos de venta</p>
					<p>Política de privacidad y cookies</p>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
