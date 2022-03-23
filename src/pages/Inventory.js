import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import '../styles/Inventory.css';
import Balls from "../balls.json";
import Bags from "../bags.json";
import Accessories from "../accessories.json";
import Shoes from "../shoes.json";

function Inventory() {
	
	const history = useHistory();

	const [searchTerm, setSearchTerm] = useState('');
	
	const askDetails = (e) => {
		localStorage.setItem("details", "Hello, I am interested in item " + e.id + " which is the " + e.condition + " " + e.name + " that weighs " + e.weight + " lbs and has a description of: " + e.description + ", for $" + e.price + ".");
		history.push("/contact");
	}	

	const isSearched = (e) => {
		if (e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			e.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
			e.price.toString().toLowerCase().includes(searchTerm.toLowerCase())){
				return true;
		} else {
			return false;
		}
	}
	
	return (

		<div className="inv-wrap" id="Top">
				
			<div className="search">
				<input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
				<input type="button" onClick={() => setSearchTerm('')} value="All"/>
				<input type="button" onClick={() => setSearchTerm("new")} value="New"/>
				<input type="button" onClick={() => setSearchTerm("used")} value="Used"/>
				
			</div>

			<div className="scroll">
				<a href="#Balls">Balls</a>
				<a href="#Bags">Bags</a>
				<a href="#Accessories">Accessories</a>
				<a href="#Shoes">Shoes</a>
				<a href="#Balls">Top</a>
			</div>

			<span id="Balls"> Balls </span>

			<div className="inv-grid">
				{ Balls.filter((val) => {
					if (isSearched(val)) {
						return val;
					} else {
						return val = '';
					}
				}).map(inv => {
					return(
						<div key={ inv.id } className="inv-wrap1">
							<h1>{ inv.name }</h1>
							<img src={ inv.image } alt="bowling ball" />
							<p>Condition: { inv.condition }</p>
							<p>Description: { inv.description }</p>
							<p>Price: $ { inv.price }</p>
							<p>Weight: { inv.weight} lbs</p>
							<button onClick={() => askDetails(inv)}> Ask for Details </button>
						</div>
					)
				})}
			</div>

			<span id="Bags"> Bags </span>

			<div className="inv-grid">
				{ Bags.filter((val) => {
					if (isSearched(val)) {
						return val;
					} else {
						return val = '';
					}
				}).map(inv => {
					return(
						<div key={ inv.id } className="inv-wrap1">
							<h1>{ inv.name }</h1>
							<img src={ inv.image } alt="bowling bag" />
							<p>Condition: { inv.condition }</p>
							<p>Description: { inv.description }</p>
							<p>Price: $ { inv.price }</p>
							<button onClick={() => askDetails(inv)}> Ask for Details </button>
						</div>
					)
				})}
			</div>

			<span id="Accessories"> Accessories </span>

			<div className="inv-grid">
				{ Accessories.filter((val) => {
					if (isSearched(val)) {
						return val;
					} else {
						return val = '';
					}
				}).map(inv => {
					return(
						<div key={ inv.id } className="inv-wrap1">
							<h1>{ inv.name }</h1>
							<img src={ inv.image } alt="bowling accessories" />
							<p>Condition: { inv.condition }</p>
							<p>Description: { inv.description }</p>
							<p>Price: $ { inv.price }</p>
							<button onClick={() => askDetails(inv)}> Ask for Details </button>
						</div>
					)
				})}
			</div>

			<span id="Shoes"> Shoes </span>

			<div className="inv-grid">
				{ Shoes.filter((val) => {
					if (isSearched(val)) {
						return val;
					} else {
						return val = '';
					}
				}).map(inv => {
					return(
						<div key={ inv.id } className="inv-wrap1">
							<h1>{ inv.name }</h1>
							<img src={ inv.image } alt="bowling shoes" />
							<p>Condition: { inv.condition }</p>
							<p>Description: { inv.description }</p>
							<p>Price: $ { inv.price }</p>
							<button onClick={() => askDetails(inv)}> Ask for Details </button>
						</div>
					)
				})}
			</div>
			
		</div>	
	)
}

export default Inventory;