import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<div className="BlockHome">
				<div className="fotoBackground"></div>
				<div className="blockCard">
					<div className="logoCard" data-aos="flip-left">
						<img
							className="logoIcon"
							src="https://www.ferra.ru/imgs/2021/11/16/13/5030547/ca66f9bfa16290d22e0c0d6bdb8328cf5d918e55.jpg"
							alt=""
						/>
						<h3 className="h3Tag">К Л И Н И К А</h3>
						<h4 className="h4Tag">Д О К Т О Р А</h4>
						<h3 className="h3Tag">МЕНДИБАЕВА К.Т</h3>
					</div>
					<div className="blockadress">
						<div>
							<h2 className="h2Tag">
								Н Е Й Р О Х И Р У Р Г И Я <br /> Б И Ш К Е К{" "}
							</h2>
						</div>
						<br />
						<p>
							1 Мы проводим консервативное и хирургическое лечение инсульта.
						</p>
						<br />
						<p>2 Стентирование и эмболизация аневризм головного мозга.</p>
						<br />
						<p>3 Клипипрование аневризм сосудов ГМ.</p>
						<br />
						<p>
							4 Микрохирургическое удаление опухолей головного мозга и спинного
							мозга.
						</p>
						<br />
						<p>5 Удаление внутричерепных гематом</p>
						<br />
						<p>6 Удаление грыжи межпозвоночных дисков и др</p>
					</div>
				</div>
			</div>
			<div className="blockHomeSecond">
				<div class="flip-card" data-aos="fade-up">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<img
								className="imgCard"
								src="https://mrt-v-msk.ru/images/anevrizma_golovnogo_mozga1.ry8YS.jpg"
								alt=""></img>
						</div>
						<div class="flip-card-back">
							<p>
								{" "}
								<h4>
									Геморрагический и ишемический инсульт: лечение В последние
									годы сосудистые патологии нервной системы значительно
									"помолодели". Сейчас инсульт может развиться не только у лиц
									преклонного возраста, но и молодых людей, а в отдельных
									случаях даже у детей. Инсульт – это острое нарушение мозгового
									кровообращения (ОНМК).
								</h4>
							</p>
						</div>
					</div>
				</div>
				<div class="flip-card" data-aos="flip-left">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<img
								className="imgCard"
								src="https://medica24.ru/uploads/endovascular-surgensy-26112019-2.jpeg"
								alt=""></img>
						</div>
						<div class="flip-card-back">
							<p>
								<h4>
									Эндоваскуля́рная хирурги́я (рентгенохирургия, интервенционная
									кардиология и интервенционная радиология) — хирургические
									вмешательства, проводимые на кровеносных сосудах чрескожным
									доступом под контролем методов лучевой визуализации с
									использованием специальных инструментов.
								</h4>
							</p>
						</div>
					</div>
				</div>
				<div class="flip-card" data-aos="fade-up">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<img
								className="imgCard"
								src="https://diamed.ru/wp-content/uploads/2016/12/Depositphotos_13995482_s-2015-1.jpg"
								alt=""></img>
						</div>
						<div class="flip-card-back">
							<p>
								{" "}
								<h4>
									Консервативное лечение – это лечение, направленное на
									предотвращение ухудшения состояния здоровья человека в случае
									какого-либо заболевания; при этом считается, что у пациента
									либо наступит естественное выздоровление, либо
									прогрессирование болезни удастся замедлить настолько, что ему
									не потребуется дополнительного ...
								</h4>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="blockAboutText">
				<div className="BLpapka">
					<h1>Нейрохирургические операции</h1>
					<div
						className="BLconteinerText"
						data-aos="fade-end"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine">
						<p className="BLpyshka">
							Нейрохирургические операции – это хирургические вмешательства для
							устранения травматологических повреждений последствий травм и
							заболеваний головного мозга, позвоночника, спинного мозга и
							периферических нервов. Нейрохирургические оперативные
							вмешательства проводят, когда диагностированы:
						</p>
					</div>
					<div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>
								кровоизлияния, нарушения в работе сосудов спинного и головного
								мозга;
							</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>патологии центральной и периферической нервной системы;</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>
								переломы позвоночника, дефекты черепа, травмы, опухоли
								головного, спинного мозга
							</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>аномалии и нарушения в работе мозга;</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>грыжи межпозвонковых дисков.</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>неврологические синдромы;</h3>
						</div>
						<div className="BLpor">
							<h4 className="BLtruth">✔</h4>
							<h3>воспаления в оболочке головного мозга;</h3>
						</div>
					</div>
				</div>
				<div className="BLpapka2">
					<img
						data-aos="zoom-in"
						src="https://neuros.ru/images/operacii/neyrohirurgicheskaya-operaciya.webp"
						alt=""></img>
					<h3>Нейрохирургическая операция</h3>
				</div>
			</div>
			<div className="blockAboutKinds">
				<h2>Преимущества нейрохирургических операций в нашем Клинике</h2>
			</div>
			<div className="BlockAboutOPclinica">
				<div className="BLCard" data-aos="zoom-out">
					<img
						src="https://w7.pngwing.com/pngs/733/745/png-transparent-globe-world-earth-computer-icons-globe.png"
						alt=""
					/>
					<p>
						Лечение по мировым методикам - используем современные кыргызские и
						российские протоколы.
					</p>
				</div>
				<div className="BLCard" data-aos="zoom-out">
					<img
						src="https://www.artisantg.com/itemimages/CarlZeiss_Jena_Plan_View4.JPG"
						alt=""
					/>
					<p>
						Селективный аниогрофом микроскоп б план, микроскоп "Carl Zeiss".
					</p>
				</div>
				<div className="BLCard" data-aos="zoom-out-up">
					<img
						src="https://www.safetyandquality.gov.au/sites/default/files/2022-10/PCCAREWEB-Icons-Evaluating%20PCC.png"
						alt=""
					/>
					<p>
						Нейрохирурги с мировым опытом работы и европейским образованием.
						Стажируются в зарубежных клиниках, обучаются на тренингах в
						профильных Казакских ,Российских,Турецских и Беларусских центрах.
					</p>
				</div>
				<div className="BLCard" data-aos="zoom-out-up">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
						alt=""
					/>
					<p>
						Минимальная травматичность хирургических вмешательств. Применяем
						операционный микроскоп, чтобы микронейрохирургия была щадящей и
						безошибочной. Современное оборудование обеспечивает точность
						операций, без повреждения здоровых тканей.
					</p>
				</div>
				<div className="BLCard" data-aos="zoom-out-down">
					<img
						src="https://cdn-icons-png.flaticon.com/512/5157/5157691.png"
						alt=""
					/>
					<p>
						Внимание, поддержка и сопровождение на всех этапах. За один визит
						пациенты проходят консультацию у профильного специалиста,
						большинство обследований, сдают анализы. После операции находятся
						под пристальным наблюдением врачей анестезиологов-реаниматологов в
						реанимационном отделении (в первые сутки после хирургического
						вмешательства) или в палате пробуждения.
					</p>
				</div>
			</div>{" "}
			<div class="block4">
				<div class="blockleft">
					<div
						class="blockText"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500">
						<h3
							class="
            endo">
							Виды нейрохирургических операций
						</h3>
						<h5 class="htort">
							В Центре проводим следующие виды операций в нейрохирургии.
						</h5>
					</div>
					<div class="blockText" data-aos="fade-up" data-aos-duration="3000">
						<h3
							class="
            endo">
							Эндоваскулярные операции{" "}
						</h3>
						<h5 class="htort">
							Эндоваскулярная операция на сосудах головного мозга подразумевает
							такие методы с введением катетера в сосуды: Эмболизация. Доставка
							материалов в жидкой или твердой форме (эмболизирующих веществ),
							чтобы перекрыть кровоток в патологическом участке.
						</h5>
					</div>
				</div>
				<div class="blockRight" data-aos="zoom-in-up">
					<img
						src="https://clincasequest.org/wp-content/uploads/sites/3/2020/08/4764-scaled.jpg"
						alt=""></img>
					<h4 class="endo">Эндоваскулярные операции</h4>
				</div>
			</div>
			<div class="block5bl">
				<div class="blockContentbl">
					<h3 class="endo">Микрохирургическии операции головного мозга</h3>
					<img
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						src="https://мсз.рф/upload/iblock/lod/ins3.webp"
						alt=""></img>
					<h4 class="h44">Микрохирургическии операции головного мозга</h4>
				</div>
				<div data-aos="zoom-out-down">
					<h4 class="h4TagAb">
						Суть его заключается в следующем: проводится стандартная установка
						вентрикулярного катетера в полость бокового желудочка мозга, затем
						соединение его с клапаном фиксированного или программированного
						давления. После происходит погружение катетера в поперечный синус
						головного мозга.
					</h4>
				</div>
			</div>
			<div className="blockAboutOtxyv">
				<div className="conteinerHeader">
					<button class="btn">Отзывы</button>
				</div>
				<div className="blockBox">
					<div
						className="cardAboutOtzyv"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom">
						<div className="razdelCard">
							<img
								src="https://cdn.pixabay.com/photo/2014/06/27/16/47/person-378368_640.png"
								alt=""
							/>
							<br />
							<br />
							<h5>Зайирбековна ...</h5>
						</div>
						<h3 className="tagh3">
							Благодарим вас за ваши усилия старания , высокий профессионализм
							👍Меня тоже оперировали тут )особенно благодарна Кутману
							Кочкоровичу .
						</h3>
					</div>
					<div
						className="cardAboutOtzyv"
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000">
						<div className="razdelCard">
							<img
								src="https://cdn.pixabay.com/photo/2014/06/27/16/47/person-378368_640.png"
								alt=""
							/>
							<br />
							<br />
							<h5>Адилов Эламан </h5>
						</div>
						<h3 className="tagh3">
							"Отличная клиника ! Очень понравилось обслуживание,все быстро
							грамотно и вежливые сотрудники."
						</h3>
					</div>
					<div
						className="cardAboutOtzyv"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom">
						<div className="razdelCard">
							<img
								src="https://cdn.pixabay.com/photo/2014/06/27/16/47/person-378368_640.png"
								alt=""
							/>
							<br />
							<br />
							<h5>Баймурат</h5>
						</div>
						<h3 className="tagh3">
							Очень хорошие врачи медперсоанал хорошие обслуживание пациентов
							долгих лет вам жизни вы лучшие из лучших.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
