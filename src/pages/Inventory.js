import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { useHistory } from "react-router-dom";
import '../styles/Inventory.css';

function Inventory() {
	
	const { balls } = useFirestore('Balls');
	const { bags } = useFirestore('Bags');
	const { accessories } = useFirestore('Accessories');
	const history = useHistory();
	
	const askDetails = (e) => {
		localStorage.setItem("details", "Hello, I am interested in item " + e.id + " which is the " + e.condition + " " + e.name + " that weighs " + e.weight + " lbs and has a description of: " + e.description + ", for $" + e.price);
		history.push("/contact");
	}	
	
	return (

		<div className="inv-wrap">
			
			<span> Balls </span>

			<div className="inv-grid">
				{ balls && balls.map(balls => (
					<div className="inv-wrap1" key={balls.id}>
						<h1>{balls.name}</h1>
						<img src={balls.url} alt={balls.name} />
						<p>Condition: {balls.condition} </p>
						<p>Description: {balls.description} </p>
						<p>Price: ${balls.price} </p>
						<p>Weight: {balls.weight} lbs </p>
						<button onClick={() => askDetails(balls)}> Ask for Details </button>
					</div>
				))}
			</div>

			<span> Bags </span>

			<div className="inv-grid">
				{ bags && bags.map(bags => (
					<div className="inv-wrap1" key={bags.id}>
						<h1>{bags.name}</h1>
						<img src={bags.url} alt={bags.name} />
						<p>Condition: {bags.condition} </p>
						<p>Description: {bags.description} </p>
						<p>Price: ${bags.price} </p>
						<button onClick={() => askDetails(bags)}> Ask for Details </button>
					</div>
				))}
			</div>

			<span> Accessories </span>

			<div className="inv-grid">
				{ accessories && accessories.map(accessories => (
					<div className="inv-wrap1" key={accessories.id}>
						<h1>{accessories.name}</h1>
						<img src={accessories.url} alt={accessories.name} />
						<p>Condition: {accessories.condition} </p>
						<p>Description: {accessories.description} </p>
						<p>Price: ${accessories.price} </p>
						<button onClick={() => askDetails(accessories)}> Ask for Details </button>
					</div>
				))}
			</div>

		</div>	
	)
}

export default Inventory;