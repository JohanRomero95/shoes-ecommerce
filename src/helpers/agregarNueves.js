export function agregarNueves(numero) {
	const nuevoNumero = parseFloat(numero + ".990");
	return nuevoNumero.toFixed(3);
}
