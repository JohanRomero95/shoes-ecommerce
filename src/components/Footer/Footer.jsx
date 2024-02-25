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
			<div className="footer-top">
				<div className="ubicacion">
					<h4>Ubicaciones</h4>
					<h4>Buscar Tienda</h4>
					<h4>Hazte Miembro</h4>
				</div>
				<div className="ayuda">
					<div className="ayuda-title">
						<h4>Ayuda </h4>
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
						<h4>Acerca de Nosotros</h4>
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
							<p>Sustentabilidad</p>
						</>
					)}
				</div>

				<div className="eventos">
					<div className="eventos-title">
						<h4>Eventos sneakers</h4>
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
					<h5>
						<FaMapMarkerAlt className="icons" />
						Chile
					</h5>
					<a href="https://johanromero.vercel.app" target="_blank">
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
