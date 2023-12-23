import data from "../data/data.json";

export const datos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});
};

export default datos;