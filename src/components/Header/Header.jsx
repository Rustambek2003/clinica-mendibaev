import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
	return (
		<>
			<div className="headerBlock">
				<img
					className="logoImg"
					src="https://www.ferra.ru/imgs/2021/11/16/13/5030547/ca66f9bfa16290d22e0c0d6bdb8328cf5d918e55.jpg"
					alt=""
				/>
				<div className="conteinerText">
					<h4>НЕЙРОХИРУРГИЯ</h4>
					<h5>Больница/Клиника</h5>
				</div>

				<div className="iconDiv">
					<div className="elas">
						<a href="https://instagram.com/mendibaev.clinic.kg?igshid=YmMyMTA2M2Y=">
							<i class="bi bi-instagram"></i>
						</a>

						<a href="https://www.youtube.com/results?search_query=%D0%BC%D0%B5%D0%BD%D0%B4%D0%B8%D0%B1%D0%B0%D0%B5%D0%B2+%D0%BA%D0%BE%D1%87%D0%BA%D0%BE%D1%80+%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0">
							{" "}
							<i class="bi bi-youtube"></i>
						</a>

						<a href="https://web.telegram.org/z/#1379233198">
							<i class="bi bi-telegram"></i>
						</a>
					</div>
				</div>

				{/* рустамчик */}

				<div>
					<h4 className="h4AboutOclock">
						ПН-ПТ с 07:00 до 24:00 <br />
						Сб, ВС: с 07:00 до 24:00
					</h4>
				</div>
				<button>+996(772)17 61 63</button>
			</div>

			<div className="blockAboutCategorie">
				<button className="button">
					<Link to="/">ГЛАВНОЕ</Link>
				</button>
				<button className="button">
					<Link to="/uslug">УСЛУГИ</Link>
				</button>

				<button className="button">
					<Link to="/shpecialists">CПЕЦИАЛИСТЫ</Link>
				</button>
				<button className="button">
					<Link to="/diagnosteka">ДИАГНОСТИКА</Link>
				</button>
				<button className="button">
					<Link to="/contaks">КОНТАКТЫ</Link>
				</button>
			</div>
			<div className="blockCategoree"></div>
		</>
	);
};
export default Header;
