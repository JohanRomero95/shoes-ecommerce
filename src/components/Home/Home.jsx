import { useRef, useState } from "react";
import "./Home.css";
import pauseImg from "../../assets/svg/pause.svg";
import Slider from "../Slider/Slider";
import PublicMid from "../Promo/PublicHoliday/PublicMid";
import PublicRunning from "../Promo/PublicRunning/PublicRunning";
import VideoRihanna from "../../assets/videos/videoPumaRihanna (video-converter.com).mp4";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";

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
						src={VideoRihanna}
					/>
					{mostrarBoton && (
						<img
							src={pauseImg}
							className="button-pause"
							onClick={pausarReproducir}
							alt="Pause"
							loading="lazy"></img>
					)}
				</div>
				<article className="publicidad-video">
					<h2>
						SNEAKERS <br /> NEW COLLECTION
					</h2>
					<ButtonPrimary title="Press Here" url="/Colección" />
				</article>
			</section>

			<Slider />
			<PublicRunning />
			<PublicMid />
		</main>
	);
};

export default Home;
