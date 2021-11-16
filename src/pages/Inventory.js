import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../styles/Inventory.css';

function Inventory() {
	
	const { balls } = useFirestore('Balls');
	const { bags } = useFirestore('Bags');
	const { accessories } = useFirestore('Accessories');
	
	const askDetails = (e) => {
		console.log(e.name);
	}	
	
	return (
		<div className="inv-wrap">
			
			<h1> Balls </h1>

			<div className="inv-grid">
				{ balls && balls.map(balls => (
					<div className="inv-wrap1" key={Math.random()}>
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

			<h1> Bags </h1>

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

			<h1> Accessories </h1>

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