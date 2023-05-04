import React, { useEffect } from "react";
import "./contaks.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contaks = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<div className="BlockAboutContaks">
				<h3 data-aos="fade-up">Контакты</h3>
				<div className="blockFotoBackground">
					<div className="CardUlsug">
						<div className="divFoto" data-aos="fade-right">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBZoaNq527uTL8czV98zutnNSaXBo9Q8dib7IghMeDYROfx6oFR3jkRGR5kgxvMZun4U&usqp=CAU"
								alt=""
							/>
						</div>
						<div className="divText" data-aos="fade-right">
							<h4> +996 553 103 000</h4>
							<h4> +996 772 176 163</h4>
							<h4> +996 555 176 163</h4>
						</div>
					</div>
					<div className="CardUlsug" data-aos="fade-left">
						<div className="divFoto">
							<img
								src="https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT"
								alt=""
							/>
						</div>
						<div className="divText">
							<h4>kochkormendibaev@gmail.com</h4>
						</div>
					</div>
					<div className="CardUlsug" data-aos="fade-up-right">
						<div className="divFoto">
							<img
								src="https://static.vecteezy.com/system/resources/previews/001/265/731/original/map-with-location-pin-vector.jpg"
								alt=""
							/>
						</div>
						<div className="divText">
							<h4> Ул.Курултай 25 .</h4>
						</div>
					</div>
					<div className="CardUlsug" data-aos="flip-left">
						<div className="divFoto">
							<img
								src="https://i.fbcd.co/products/resized/resized-750-500/6a02a567e67f18d237d85a1fe31a7472d62cc2dbc4718dbc485a74e3fed3184a.jpg"
								alt=""
							/>
						</div>
						<div className="divText">
							<h4>График раоты</h4>
							<h4>
								{" "}
								ПН-ПТ с 07:00 до 24:00 <br />
								Сб, ВС: с 07:00 до 24:00
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contaks;
