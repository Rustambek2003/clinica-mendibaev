import React, { useEffect } from "react";
import "./spetsialist.css";
import rusik from "../images/01.jpg";
import rusik1 from "../images/02.jpg";
import rusik2 from "../images/ed.jpg";
import rusik3 from "../images/04.jpg";
import rusik4 from "../images/05.jpg";
import Nurse from "../images/fotoAboutNurse.png";

import pop from "../images/a0.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const Shpecialists = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<div className="blokker">
				<br />
				<br />
				<br />

				<h4 className="vr">
					Наша команда состоит из квалифицированных врачей.
				</h4>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div>
					<div className="doktorlor">
						<div className="foto11">
							<img className="foto" src={rusik} alt="" />

							<h4> Мендибаев Кочкор Толонович</h4>
							<h5>
								<br /> <i className="bi bi-telephone-plus-fill"></i>{" "}
								0553-103-000
								<br />
							</h5>
							<h5>
								{" "}
								<i className="bi bi-telephone-plus-fill"></i> 0772-176-163
								<br />
							</h5>
							<div className="el0">
								{" "}
								<br />
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a
									className="el"
									href="https://instagram.com/kochkormendibaev?igshid=YmMyMTA2M2Y=">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="https://web.telegram.org/z/#1379233198">
									<i className="bi bi-telegram"></i>
								</a>
							</div>
						</div>
						{/* /////////// 22 */}
						<div className="foto11">
							<img className="foto" src={pop} alt="" />
							<br />

							<h4>Джеенбаева Гулипа Арстанбековна </h4>
							<h5>
								<br /> <i className="bi bi-telephone-plus-fill"></i>{" "}
								0500-284-428{" "}
							</h5>
							<br />
							<div className="el0">
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a className="el" href=" ">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="https://web.telegram.org/z/#5071635253">
									<i className="bi bi-telegram"></i>
								</a>
							</div>
						</div>

						{/* 3 */}
						<div className="foto11">
							<img className="foto" src={rusik2} alt="" />
							<h4>Тойчиев Залкарбек Акинжанович</h4>
							<br />
							<h5>
								{" "}
								<i className="bi bi-telephone-plus-fill"></i>0553-100-016
							</h5>
							<br />
							<div className="el0">
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a className="el" href="">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="https://web.telegram.org/z/#5239421696">
									<i className="bi bi-telegram"></i>
								</a>
							</div>

							<br />
							<br />
							<br />
						</div>

						{/* /////////////// */}
					</div>

					<div className="doc22">
						{/* ............. */}
						<div className="foto11">
							<img className="foto" src={rusik3} alt="" />
							<h4>Абдыракманов Баястан</h4>
							<br />
							<h5>
								{" "}
								<i class="bi bi-telephone-plus-fill"></i>0553-100-016
							</h5>
							<br />
							<div className="el0">
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a className="el" href="">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="">
									<i className="bi bi-telegram"></i>
								</a>
							</div>

							<br />
							<br />
							<br />
						</div>

						<div className="foto11">
							<img className="foto" src={rusik4} alt="" />
							<h4>Рахманов Кутманбек Кочкорович</h4>
							<br />
							<h5>
								{" "}
								<i className="bi bi-telephone-plus-fill"></i>0701-810-159
							</h5>
							<br />
							<div className="el0">
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a className="el" href="">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="https://web.telegram.org/z/#1002198135">
									<i className="bi bi-telegram"></i>
								</a>
							</div>

							<br />
							<br />
							<br />
						</div>

						<div className="foto11">
							<img className="foto" src={rusik1} alt="" />
							<br />

							<h4>Бердикулов Бекжан Бердикулович</h4>
							<h5>
								<br /> <i className="bi bi-telephone-plus-fill"></i>{" "}
								0555-125-444{" "}
							</h5>
							<br />
							<div className="el0">
								<a className="el" href="">
									<i class="bi bi-whatsapp"></i>
								</a>
								<a className="el" href=" ">
									<i className="bi bi-instagram"></i>
								</a>
								<a className="el" href="https://web.telegram.org/z/#5182999909">
									<i className="bi bi-telegram"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="devv"></div>

					<div className="good">
						<div className="trop">
							<div className="lok">
								<h1>
									Мы любим свое дело и с радостью вам поможем. <br /> Наш девиз:
									здоровье самое ценное богатство! <br /> Доверьте его
									профессионалам.
									<br />
									<br />
									<br />
									<h2>Наши контакты</h2>
									<br />
									<h4>+996-772-176-163</h4>
									<br />
									<h4>996-555-176-163</h4>
									<br />
									<h4>996-500-28-44-28 </h4>
								</h1>

								<div className="lok2">
									<img width={500} src={Nurse} alt="" />
								</div>
							</div>
						</div>
					</div>

					{/* ///// */}
				</div>
			</div>
			<br />
			<br />
			<br />

			<br />
		</div>
	);
};
export default Shpecialists;
