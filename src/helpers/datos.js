import data from "../data/data.json";

export const datos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 100);
	});
};

export default datos;
