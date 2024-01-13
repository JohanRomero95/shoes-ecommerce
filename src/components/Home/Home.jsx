import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./Home.css";
import pauseImg from "../../assets/svg/pause.svg";
import Slider from "../Slider/Slider";
import PublicMid from "../Promo/PublicHoliday/PublicMid";
import PublicRunning from "../Promo/PublicRunning/PublicRunning";
import VideoRihanna from "../../assets/videos/videoPumaRihanna.webm";

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
				<div className="publicidad-top">
					<div
						className="video"
						onMouseEnter={() => setMostrarBoton(true)}
						onMouseLeave={() => setMostrarBoton(false)}>
						<video ref={videoRef} autoPlay loop muted playsInline src={VideoRihanna}></video>
						{mostrarBoton && (
							<img
								src={pauseImg}
								className="button-pause"
								onClick={pausarReproducir}
								alt="Pause"></img>
						)}
					</div>
					<article className="publicidad-video">
						<h2>
							SNEAKERS <br /> NEW COLLECTION
						</h2>
						<Link to="/Colección">
							<button>Press Here</button>
						</Link>
					</article>
				</div>
			</section>

			<Slider />
			<PublicRunning />
			<PublicMid />
		</main>
	);
};

export default Home;
