import data from "../data/data.json";

export const datos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 200);
	});
};

export const pedirItemPorGender = (gender) => {
	return new Promise((resolve, reject) => {
		const item = data.find((el) => el.gender === gender);

		if (item) {
			resolve(item);
		} else {
			reject({ error: "No se encontro el producto" });
		}
	});
};

export default datos;
