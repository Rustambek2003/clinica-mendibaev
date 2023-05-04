import React, { useEffect } from "react";
import "./uslug.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Uslug = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<div className="blockAboutUse">
				<div className="blockUslug">
					<button class="btnbl">Услуги</button>
				</div>
				<div className="blockContent">
					<article class="card" data-aos="fade-right">
						<div class="temporary_text">
							<img
								className="fotoUslug"
								src="https://vedantakg.com/wp-content/uploads/2022/04/Mask-group-4.svg"
								alt=""
							/>
						</div>
						<div class="card_content">
							<span class="card_title">Нейрохирургия</span>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<p class="card_description">
								Раздел медицины, занимающийся заболеваниями нервной системы и
								лечением их хирургическим путём.
							</p>
						</div>
					</article>
					<article class="card" data-aos="flip-right">
						<div class="temporary_text">
							<img
								className="fotoUslug"
								src="https://vedantakg.com/wp-content/uploads/2022/04/Mask-group-6.svg"
								alt=""
							/>
						</div>
						<div class="card_content">
							<span class="card_title">Неврология</span>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<p class="card_description">
								Совокупность наук, изучающих нервную систему и её деятельность.
							</p>
						</div>
					</article>
					<article class="card" data-aos="flip-right">
						<div class="temporary_text">
							<img
								className="fotoUslug"
								src="https://vedantakg.com/wp-content/uploads/2022/04/Mask-group.svg"
								alt=""
							/>
						</div>
						<div class="card_content">
							<span class="card_title">Ортопедия</span>
							<br />
							<br />
							<br />
							<br />

							<p class="card_description">
								Ортопедия занимается изучением, диагностикой и лечением функций
								костно-мышечной системы человека. Подобные патологии чаще всего
								являются следствием врожденных дефектов или последствиями травм.
							</p>
						</div>
					</article>
					<article class="card" data-aos="fade-right">
						<div class="temporary_textblock">
							<img
								className="fotoUslug"
								src="https://vedantakg.com/wp-content/uploads/2022/04/Mask-group-8.svg"
								alt=""
							/>
						</div>
						<div class="card_content">
							<span class="card_title">Kардиология</span>
							<br />
							<br />
							<p class="card_description">
								Что делают в кардиологии? Врач-кардиолог занимается проблемами
								функционирования сердечно-сосудистой системы. Он диагностирует,
								лечит и осуществляет профилактику заболеваний сердца и сосудов,
								разрабатывает способы реабилитации для пациентов
							</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};
export default Uslug;
