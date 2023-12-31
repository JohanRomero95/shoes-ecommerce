import { Link } from "react-router-dom";
import videoRunning from "../../../assets/videos/Nike Running - Spec Ad.webm";
import "./PublicRunning.css";

const PublicRunning = () => {
	return (
		<Link to="/collections">
			<section className="section-running">
				<article className="publicidad-running">
					<div className="publicidad-text">
						<div className="texto">
							<h1>
								Impulsa <br /> <span>Tu Carrera</span>
							</h1>
						</div>
						<p>
							Encuentra en nuestra tienda el calzado ideal para potenciar cada zancada,
							garantizando comodidad y un impulso extra en cada carrera. Descubre cómo
							nuestras innovadoras zapatillas se convierten en tu aliado para alcanzar nuevos
							límites en el mundo del running!
						</p>
					</div>
				</article>
				<video autoPlay loop muted playsInline src={videoRunning}></video>
			</section>
		</Link>
	);
};

export default PublicRunning;
