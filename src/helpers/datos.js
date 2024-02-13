import data from "../data/data.json";

export const datos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 200);
	});
};

export const pedirItemPorId = async (id) => {
	return new Promise((resolve, reject) => {
		const item = data.find((el) => el.id === id);
		if (item) {
			resolve(item);
		} else {
			reject({ error: "No se encontró el producto" });
		}
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
