import { Link } from "react-router-dom";
import "./ButtonPrimary.css";

const ButtonPrimary = ({ title, isSpecial, url }) => {
	return url ? (
		<Link to={url}>
			<button className={`btn-primary ${isSpecial ? `special` : ``}`}>{title}</button>
		</Link>
	) : (
		<button className={`btn-primary ${isSpecial ? `special` : ``}`}>{title}</button>
	);
};

export default ButtonPrimary;
