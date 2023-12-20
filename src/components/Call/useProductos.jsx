import { useState, useEffect } from "react";
import { datos } from "../../helpers/datos";

export function useProductos() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		datos().then((res) => {
			setProductos(res);
		});
	}, []);

	return productos;
}
