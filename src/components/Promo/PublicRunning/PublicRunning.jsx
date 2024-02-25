import { Link } from "react-router-dom";
import videoRunning from "../../../assets/videos/Nike Running - Spec Ad (video-converter.com).mp4";
import "./PublicRunning.css";

const PublicRunning = () => {
	return (
		<Link to="/Colección">
			<section className="section-running">
				<article className="texto">
					<h1>
						Impulsa <br /> <span>Tu Carrera</span>
					</h1>
					<p>
						Encuentra en nuestra tienda el calzado ideal para potenciar cada zancada,
						garantizando comodidad y un impulso extra en cada carrera. Descubre cómo nuestras
						innovadoras zapatillas se convierten en tu aliado para alcanzar nuevos límites en
						el mundo del running!
					</p>
				</article>
				<video autoPlay loop muted playsInline src={videoRunning} loading="lazy"></video>
			</section>
		</Link>
	);
};

export default PublicRunning;
