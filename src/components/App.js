import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "./Header/Header";
import Shpecialists from "../pages/Shpesialists/Shpecialists";
import Uslug from "../pages/Uslug/Uslug";
import Diagnosteka from "../pages/Diagnosteka/Diagnosteka";
import Contaks from "../pages/Contaks/Contaks";
import Footer from "../pages/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/shpecialists" element={<Shpecialists />} />
				<Route path="/uslug" element={<Uslug />} />
				<Route path="/diagnosteka" element={<Diagnosteka />} />
				<Route path="/contaks" element={<Contaks />} />
			</Routes>
			<Footer />
		</>
	);
};
export default App;
