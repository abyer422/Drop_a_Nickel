import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import '../styles/Inventory.css';

function Inventory() {
	
	const { balls } = useFirestore('Balls');
	const { bags } = useFirestore('Bags');
	const { accessories } = useFirestore('Accessories');
	const { shoes } = useFirestore('Shoes');
	const history = useHistory();

	const [searchTerm, setSearchTerm] = useState('');
	
	const askDetails = (e) => {
		localStorage.setItem("details", "Hello, I am interested in item " + e.id + " which is the " + e.condition + " " + e.name + " that weighs " + e.weight + " lbs and has a description of: " + e.description + ", for $" + e.price + ".");
		history.push("/contact");
	}	
	
	return (

		<div className="inv-wrap" id="Top">

			<div className="search">
				<input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
				<input type="button" onClick={() => setSearchTerm('')} value="All"/>
				<input type="button" onClick={() => setSearchTerm('new')} value="New"/>
				<input type="button" onClick={() => setSearchTerm('used')} value="Used"/>
				<a href="#Balls">Balls</a>
				<a href="#Bags">Bags</a>
				<a href="#Accessories">Accessories</a>
				<a href="#Shoes">Shoes</a>
				<a href="#Balls">Top</a>
			</div>
			
			<span id="Balls"> Balls </span>

			<div className="inv-grid">
				{ balls && balls.filter((val) => {
					if (searchTerm === '') {
						return val;
					} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.condition.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.price.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.weight.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					}
				}).map(balls => (
					<div className="inv-wrap1" key={balls.id}>
						<h1>{balls.name}</h1>
						<img src={balls.url} alt={balls.name} />
						<p id="condition">Condition: {balls.condition} </p>
						<p>Description: {balls.description} </p>
						<p>Price: ${balls.price} </p>
						<p>Weight: {balls.weight} lbs </p>
						<button onClick={() => askDetails(balls)}> Ask for Details </button>
					</div>
				))}
			</div>

			<span id="Bags"> Bags </span>

			<div className="inv-grid">
				{ bags && bags.filter((val) => {
					if (searchTerm === '') {
						return val;
					} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.condition.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					}
				}).map(bags => (
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

			<span id="Accessories"> Accessories </span>

			<div className="inv-grid">
				{ accessories && accessories.filter((val) => {
					if (searchTerm === '') {
						return val;
					} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.condition.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					}
				}).map(accessories => (
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

			<span id="Shoes"> Shoes </span>

			<div className="inv-grid">
				{ shoes && shoes.filter((val) => {
					if (searchTerm === '') {
						return val;
					} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					} else if (val.condition.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					}
				}).map(shoes => (
					<div className="inv-wrap1" key={shoes.id}>
						<h1>{shoes.name}</h1>
						<img src={shoes.url} alt={shoes.name} />
						<p>Condition: {shoes.condition} </p>
						<p>Description: {shoes.description} </p>
						<p>Price: ${shoes.price} </p>
						<button onClick={() => askDetails(shoes)}> Ask for Details </button>
					</div>
				))}
			</div>

		</div>	
	)
}

export default Inventory;