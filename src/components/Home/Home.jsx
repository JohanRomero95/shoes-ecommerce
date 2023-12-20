import { useRef } from "react";
import "./Home.css";
import { useState } from "react";
import pauseImg from "../../assets/svg/pause.svg";

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
		<div className="contenedor">
			<section className="section-top">
				<div className="publicidad-top">
					<div
						className="video"
						onMouseEnter={() => setMostrarBoton(true)}
						onMouseLeave={() => setMostrarBoton(false)}>
						<video
							ref={videoRef}
							autoPlay
							loop
							muted
							playsInline
							src="https://cl.puma.com/media/contentmanager/content/23AW_SP_Fenty-Creeper_Rihanna_1536x1536_15s.mp4"></video>
						{mostrarBoton && (
							<img src={pauseImg} className="button-pause" onClick={pausarReproducir}></img>
						)}
					</div>
					<div className="publicidad-video">
						<h2>
							FENTY x PUMA <br /> CREEPER PHATTY
						</h2>
						<button>Press Here</button>
					</div>
				</div>
				<section className="section-mid">
					<div className="publicidad-mid">
						<h3>hey you</h3>
					</div>
				</section>
			</section>
		</div>
	);
};

export default Home;
