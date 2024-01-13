import publicImg from "../../../assets/images/holidayTwo.webp";
import "./PublicMid.css";

const PublicMid = () => {
	return (
		<section className="section-mid">
			<article className="publicidad-mid">
				<div className="background-public-img">
					<img src={publicImg} className="publicidad-img"></img>
				</div>
			</article>
		</section>
	);
};

export default PublicMid;
