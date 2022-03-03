import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useFirestore = (collection) => {
	const [balls, setBalls] = useState([]);
	const [bags, setBags] = useState([]);
	const [accessories, setAccessories] = useState([]);
	const [shoes, setShoes] = useState([]);
		
	useEffect(() => {
		projectFirestore.collection(collection)
			.onSnapshot((snap) => {
				let inventory = [];
				snap.forEach(inv => {
					inventory.push({...inv.data(), id: inv.id});
				});
				setBalls(inventory);
				setBags(inventory);
				setAccessories(inventory);
				setShoes(inventory);
			});

	}, [collection])

	return { balls, bags, accessories, shoes };
}

export default useFirestore;