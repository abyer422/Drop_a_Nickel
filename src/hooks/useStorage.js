import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, } from '../firebase';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const storageRef = projectStorage.ref(file.name);
		const category = document.querySelector('input[name=category]:checked').value;
		const collectionRef = projectFirestore.collection(category);

		storageRef.put(file).on('state_changed', (snap) => {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			setProgress(percentage);
		}, (err) => {
			setError(err);
		}, async () => {
			const url = await storageRef.getDownloadURL();
			const name = document.getElementById("Name").value;
			const description = document.getElementById("Description").value;
			const price = document.getElementById("Price").value;
			const weight = document.getElementById("Weight").value;
			const condition = document.querySelector('input[name=status]:checked').value;
			collectionRef.add({ url, name, description, price, weight, condition });
			setUrl(url);
		})
	}, [file]);

	return { progress, url, error }

}

export default useStorage;