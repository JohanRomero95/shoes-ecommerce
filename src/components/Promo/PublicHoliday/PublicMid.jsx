import publicImg from "../../../assets/images/holidayTwo.webp";
import "./PublicMid.css";

const PublicMid = () => {
	return (
		<article className="publicidad-mid">
			<img src={publicImg} loading="lazy" alt="Holiday Nike" />
		</article>
	);
};

export default PublicMid;
