import { Link } from "react-router-dom";
import "./ButtonSecondary.css";

const ButtonSecondary = ({ title, isSpecial, url, onClick }) => {
	return url ? (
		<Link to={url}>
			<button onClick={onClick} className={`btn-secondary ${isSpecial ? `special` : ``}`}>
				{title}
			</button>
		</Link>
	) : (
		<button onClick={onClick} className={`btn-secondary ${isSpecial ? `special` : ``}`}>
			{title}
		</button>
	);
};

export default ButtonSecondary;
