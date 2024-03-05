import React, { createContext, useContext, useState } from "react";

const TallaContext = createContext();

export const TallaProvider = ({ children }) => {
	const [tallasSeleccionadas, setTallasSeleccionadas] = useState({});

	const setTallaSeleccionada = (idProducto, talla) => {
		setTallasSeleccionadas((prevState) => ({
			...prevState,
			[idProducto]: talla,
		}));
	};

	return (
		<TallaContext.Provider value={{ tallasSeleccionadas, setTallaSeleccionada }}>
			{children}
		</TallaContext.Provider>
	);
};

export const useTallaContext = () => useContext(TallaContext);
