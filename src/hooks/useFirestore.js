import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useFirestore = (collection) => {
	const [balls, setBalls] = useState([]);
	const [bags, setBags] = useState([]);
	const [accessories, setAccessories] = useState([]);
		
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
			});

		// return () => unsub();

	}, [collection])

	return { balls, bags, accessories };
}

export default useFirestore;