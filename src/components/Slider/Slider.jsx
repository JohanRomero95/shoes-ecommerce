import { useState } from "react";
import "./Slider.css";
import { useProductos } from "../Call/useProductos";
import next from "../../assets/svg/next.svg";
import before from "../../assets/svg/before.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const Slider = () => {
	const productos = useProductos();
	const [currentSlide, setCurrentSlide] = useState(0);

	const totalSlides = Math.ceil(productos.length / 4);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
	};

	const isMobile = useMediaQuery("(max-width: 550px)");
	const isTablet = useMediaQuery("(min-width: 551px) and (max-width: 767px)");
	const isDesktop = useMediaQuery("(min-width: 768px) and (max-width: 1034px) ");

	const slidesToShow = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;

	const startIndex = currentSlide * slidesToShow;
	const slidesToRender = productos.slice(startIndex, startIndex + slidesToShow);

	if (!productos || productos.length === 0) {
		return null;
	}

	return (
		<>
			<section className="slider">
				<img className="button-slider-before" loading="lazy" src={before} onClick={prevSlide} />
				{slidesToRender.map((producto) => (
					<div className="slider-detail" key={producto.id}>
						<Link to={`/producto/${producto.id}`}>
							<img
								src={producto.imageURL}
								alt={`${producto.name}`}
								title={`${producto.name}`}
								loading="lazy"
							/>
						</Link>
						<h3>{producto.name}</h3>
					</div>
				))}
				<img className="button-slider-next" loading="lazy" src={next} onClick={nextSlide} />
			</section>
		</>
	);
};

export default Slider;
