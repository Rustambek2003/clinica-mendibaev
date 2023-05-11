import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div>
			<footer>
				<div class="footerr">
					<div class="roditel1">
						<h3 class="soR"></h3>
						<div class="blockF">
							<img
								class="imgPhone"
								src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
								alt=""></img>
							<p>+996 553 10 30 00</p>
						</div>

						<div class="blockF">
							<img
								class="imgPhone"
								src="https://img.freepik.com/premium-vector/message-icon-mail-envelope-sms-icon-design_551425-1002.jpg"
								alt=""></img>
							<p>kochkormendibaev@gmail.com</p>
						</div>
					</div>
					<br />
					<div class="blockR">
						<h3>Полезные ссылки</h3>

						<h4
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/");
							}}>
							ГЛАВНОЕ
						</h4>
						<h4
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("uslug");
							}}>
							{" "}
							УСЛУГИ{" "}
						</h4>

						<h4
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/shpecialists");
							}}>
							CПЕЦИАЛИСТЫ
						</h4>
						<h4
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/diagnosteka");
							}}>
							ДИАГНОСТИКА
						</h4>
						<h4
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/contaks");
							}}>
							КОНТАКТЫ{" "}
						</h4>
					</div>
					<div class="insta">
						<div class="ins">
							<br />
							<br />
							<br />
						</div>
						<h3 class="h3">МЕНДИБАЕВА К.Т</h3>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
