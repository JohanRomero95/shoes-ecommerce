import { useState } from "react";
import "./Slider.css";
import { useProductos } from "../Call/useProductos";
import next from "../../assets/svg/next.svg";
import before from "../../assets/svg/before.svg";
import { Link } from "react-router-dom";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const productos = useProductos();

	if (!productos || productos.length === 0) {
		return null;
	}

	const totalSlides = Math.ceil(productos.length / 4);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
	};

	const startIndex = currentSlide * 4;
	const slidesToShow = productos.slice(startIndex, startIndex + 4);

	return (
		<>
			{/* <section className="slider"> */}
			<section className="slider">
				<img className="button-slider-before" src={before} onClick={prevSlide} />
				{slidesToShow.map((producto) => (
					<div className="slider-detail" key={producto.id}>
						<Link to={`/producto/${producto.id}`}>
							<img
								src={producto.imageURL}
								alt={`${producto.name}`}
								title={`${producto.name}`}
							/>
						</Link>
						<h3>{producto.name}</h3>
					</div>
				))}
				<img className="button-slider-next" src={next} onClick={nextSlide} />
			</section>
			{/* </section> */}
		</>
	);
};

export default Slider;
