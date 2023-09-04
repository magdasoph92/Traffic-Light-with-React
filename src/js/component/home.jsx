import React, { Fragment, useState, useEffect } from "react";
import { Bulb } from "./bulb.jsx";


const firstColor = "danger";
const secondColor = "warning";
const thirdColor = "success";

export function Home() {
	// const [light, setLight] = useState(false);
	const [redBulb, setRedBulb] = useState("dark");
	const [yellowBulb, setYellowBulb] = useState("dark");
	const [greenBulb, setGreenBulb] = useState("dark");

	const changeColorRed = () => {
		setRedBulb(firstColor);
		setYellowBulb("dark");
		setGreenBulb("dark");
	};

	const changeColorYellow = () => {
		setRedBulb("dark");
		setYellowBulb(secondColor);
		setGreenBulb("dark");
	};

	const changeColorGreen = () => {
		setRedBulb("dark");
		setYellowBulb("dark");
		setGreenBulb(thirdColor);
	};
	return (
		<Fragment>
			<div className="container">
				<Bulb onMyClick={() => changeColorRed()} color={redBulb} />
				<Bulb
					onMyClick={() => changeColorYellow()}
					color={yellowBulb}
				/>
				<Bulb
					onMyClick={() => changeColorGreen()}
					color={greenBulb}
				/>
			</div>
			<div className="trafficLightPole" />
		</Fragment>
	);
}

export default Home;
