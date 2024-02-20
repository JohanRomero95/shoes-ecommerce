import "./ButtonPrimary.css";

const ButtonPrimary = ({ title, isSpecial }) => {
	return (
		<>
			<button className={`btn-primary ${isSpecial ? `special` : ``}`}>{title}</button>
		</>
	);
};

export default ButtonPrimary;
