import { useRef } from "react";
import "./Home.css";
import { useState } from "react";
import pauseImg from "../../assets/svg/pause.svg";
import Slider from "../Slider/Slider";
import PublicMid from "../Publicidad/PublicHoliday/PublicMid";
import PublicRunning from "../Publicidad/PublicRunning/PublicRunning";
import VideoRihanna from "../../assets/videos/videoPumaRihanna.webm";
import { Link } from "react-router-dom";

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

	const [showContent, setShowContent] = useState(false);

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
						<Link to="/collections">
							<button>Press Here</button>
						</Link>
					</article>
				</div>
			</section>

			<div className="container">
				<div
					className="hover-area"
					onMouseEnter={() => setShowContent(true)}
					onMouseLeave={() => setShowContent(false)}>
					<p>Hover sobre este área</p>
				</div>
				<div className="content-wrapper">
					{showContent && (
						<ol className="hidden-content">
							<li>
								<Link to="/collections">Wena po shoro</Link>
							</li>
							{/* Agrega más elementos aquí */}
						</ol>
					)}
				</div>
			</div>

			<Slider />
			<PublicRunning />
			<PublicMid />
		</main>
	);
};

export default Home;
