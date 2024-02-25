import { Link } from "react-router-dom";
import "./ButtonPrimary.css";

const ButtonPrimary = ({ titulo: titulo, isSpecial, url }) => {
	return url ? (
		<Link to={url}>
			<button className={`btn-primary ${isSpecial ? `special` : ``}`}>{titulo}</button>
		</Link>
	) : (
		<button className={`btn-primary ${isSpecial ? `special` : ``}`}>{titulo}</button>
	);
};

export default ButtonPrimary;
