import { useState, useEffect } from "react";

const LocationDisplay = () => {
	const [country, setCountry] = useState("");

	useEffect(() => {
		const getLocation = async () => {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(async function (position) {
					const { latitude, longitude } = position.coords;

					try {
						const response = await fetch(
							`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCwdzdZwVmUMg27Jc6s0SpgjpCYWd7Kqg4`,
						);
						const data = await response.json();

						if (data.results && data.results.length > 0) {
							const countryInfo = data.results[0].address_components.find((component) =>
								component.types.includes("country"),
							);
							const countryName = countryInfo ? countryInfo.long_name : "Desconocido";

							setCountry(countryName);
						} else {
							setCountry("Desconocido");
						}
					} catch (error) {
						console.error("Error fetching data:", error);
						setCountry("Desconocido");
					}
				});
			} else {
				console.log("Geolocalización no está disponible en este navegador.");
			}
		};

		getLocation();
	}, []);

	return (
		<div>
			<p>Tu país: {country}</p>
		</div>
	);
};

export default LocationDisplay;
