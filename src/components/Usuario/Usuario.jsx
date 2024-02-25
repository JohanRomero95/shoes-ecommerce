import imagenUsuario from "../../assets/images/image-avatar.png";

const Usuario = () => {
	return (
		<div className="imagenUsuario">
			<img className="navbar--imagenUsuario" loading="lazy" src={imagenUsuario} alt="" />
		</div>
	);
};

export default Usuario;
