import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [active, setActive] = useState("");
	const [purple, setPurple] = useState(null);
	const color = ["red", "yellow", "green"];
	const [number, setNumber] = useState(0);
	const [contador, setContador] = useState(1);

	//funcion para cambiar de color
	const colorChange = () => {

		if (number < 3) {
			setActive(color[number]);
			setNumber(number + 1)
		} if (number === 2) {
			//console.log(number)
			setNumber(0)
		}

	}

	//para colorcar luz purpura
	const PurpuraColor = (cont) => {
		setContador(cont + contador);
		console.log(contador);
		if (contador % 2 === 0)
			setPurple("active")
		else
			setPurple("null")
	}

	return (
		<div className="container vh-100 ">
			<dir className="palo bg-black m-auto "></dir>
			<div className="baseSemaforo bg-black  m-auto d-flex flex-column align-items-center">
				<div className={`light red ${active === "red" && "active"}`}
					onClick={() => setActive("red")}></div>
				<div className={`light yellow ${active === "yellow" && "active"}`}
					onClick={() => setActive("yellow")}></div>
				<div className={`light green ${active === "green" && "active"}`}
					onClick={() => setActive("green")}></div>
				{purple === "active" ?
					<div className={`light purple ${active === "purple" && "active"}`}
						onClick={() => setActive("purple")}></div>
					: ""}
			</div>
			<button type="button" class="btn btn-primary" onClick={() => colorChange()}>Color Change</button>
			<button type="button" class="btn btn-secondary" onClick={() => PurpuraColor(1)}>Color Purpura</button>
		</div>
	);
};

export default Home;