import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import '../styles/uploadForm.css';

const UploadForm = () => {
	
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ['image/png', 'image/jpeg', 'image/jpg'];

	const changeHandler = (e) => {
		let selected = e.target.files[0];
				
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Please select an image file (png, jpeg or jpg)');
		}
	}

	return (
		<form className="form" id="Inv">

			<div className="upload-center">
				<h3>Choose a category:</h3>
			</div>

			<div className="radio">
				<label htmlFor="balls">Balls</label>
					<input
						id="balls"
						name="category"
						type="radio"
						value="Balls"
						required />

				<label htmlFor="bags">Bags</label>
					<input
						id="bags"
						name="category"
						type="radio"
						value="Bags"
						required />

				<label htmlFor="accessories">Accessories</label>
					<input
						id="accessories"
						name="category"
						type="radio"
						value="Accessories"
						required />
			</div>

			<label htmlFor="name">
				<h3>Item Name:</h3>
			</label>
				<input 
					id="Name"
					name="name" 
					placeholder="Enter name of item..." 
					type="text" 
					maxLength='30'
					required />

			<div>
				<h3>Condition:</h3>
			</div>

			<div className="radio">
				<label htmlFor="new">New</label>
					<input
						id="new"
						name="status"
						type="radio"
						value="New"
						required />

				<label htmlFor="used">Used</label>
					<input
						id="used"
						name="status"
						type="radio"
						value="Used"
						required />
			</div>

			<label htmlFor="description">
				<h3>Description:</h3>
			</label>
				<input 
					id="Description"
					name="description" 
					placeholder="Enter description of item..." 
					type="text" 
					maxLength='200' 
					required />
			
			<label htmlFor="price">
				<h3>Price:</h3>
			</label>
				<input 
					id="Price"
					name="price" 
					placeholder="Enter price of item..." 
					type="number" 
					required />
			
			<label htmlFor="weight">
				<h3>Weight:</h3>
			</label>
				<input 
					id="Weight"
					name="weight" 
					placeholder="Enter weight of item..." 
					type="number" />								
			
			
			<label htmlFor="Image">
				<h3>Item image:</h3>
			</label>
				<input 
					id="Image"
					name="file"
					type="file"
					onChange={changeHandler} />

			<div className="output">
				{ error && <div className="error">{ error }</div> }
				{ file && <div>{ file.name }</div> }
				{ file && <ProgressBar file={file} setFile={setFile} /> }
			</div>

			<button type="submit"> Submit </button>

		</form>
	)

}

export default UploadForm;