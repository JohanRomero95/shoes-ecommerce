import "./Home.css";

const Home = () => {
	return (
		<div className="contenedor">
			<div className="publicidad-top">
				<div className="video">
					<video
						autoPlay
						loop
						muted
						playsInline // Añade esta propiedad para garantizar la reproducción en iOS
						src="https://cl.puma.com/media/contentmanager/content/23AW_SP_Fenty-Creeper_Rihanna_1536x1536_15s.mp4"></video>
				</div>
				<div>
					<h2>FENTY x PUMA CREEPER PHATTY</h2>
					<button>Press Here</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
