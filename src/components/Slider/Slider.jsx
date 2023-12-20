import { useState } from "react";
import "./Slider.css";
import { useProductos } from "../Call/useProductos";
import next from "../../assets/svg/next.svg";
import before from "../../assets/svg/before.svg";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const productos = useProductos();

	if (!productos || productos.length === 0) {
		return null;
	}

	const totalSlides = Math.ceil(productos.length / 3);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
	};

	const startIndex = currentSlide * 3;
	const slidesToShow = productos.slice(startIndex, startIndex + 3);

	return (
		<div className="slider">
			<img className="button-slider" src={before} onClick={prevSlide} />
			<div className="slider-contenedor">
				{slidesToShow.map((producto) => (
					<img key={producto.id} src={producto.imageURL} alt={`Slide ${producto.id}`} />
				))}
			</div>
			<img className="button-slider" src={next} onClick={nextSlide} />
		</div>
	);
};

export default Slider;
