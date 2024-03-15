import { useRef, useState } from "react";
import Slider from "../Slider/Slider";
import PublicMid from "../Promo/PublicHoliday/PublicMid";
import PublicRunning from "../Promo/PublicRunning/PublicRunning";
import VideoRihanna from "../../assets/videos/videoPumaRihanna (video-converter.com).mp4";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import { MdOutlinePauseCircleOutline } from "react-icons/md";
import "./Home.css";

const Home = () => {
	const videoRef = useRef(null);
	const [mostrarBoton, setMostrarBoton] = useState(false);

	const pausarReproducir = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	};

	return (
		<main className="contenedor">
			<section className="section-top">
				<div
					className="btn-video"
					onMouseEnter={() => setMostrarBoton(true)}
					onMouseLeave={() => setMostrarBoton(false)}>
					<video
						className="section-top--video"
						ref={videoRef}
						autoPlay
						loop
						muted
						playsInline
						title="Video publicitario Puma Rihanna"
						aria-label="Video publicitario Puma Rihanna"
						alt="Video publicitario Puma Rihanna"
						src={VideoRihanna}>
						<track src="#" kind="captions" srcLang="es" label="Spanish" default />
					</video>
					{mostrarBoton && (
						<MdOutlinePauseCircleOutline
							className="button-pause"
							onClick={pausarReproducir}
							alt="Pausar reproducción"
							aria-label="Pausar reproducción"
							title="Pausar reproducción"
							loading="lazy"></MdOutlinePauseCircleOutline>
					)}
				</div>
				<article className="publicidad-video">
					<h2>
						ZAPATILLAS <br /> NUEVA COLECCIÓN
					</h2>
					<ButtonPrimary
						titulo="Ver Colección"
						url="/Colección"
						alt="Ver Colección"
						aria-label="Ver Colección"
						title="Ver Colección"
					/>
				</article>
			</section>

			<Slider />
			<PublicRunning />
			<PublicMid />
		</main>
	);
};

export default Home;
