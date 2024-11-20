import { db } from '../_utils/firebase.js';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';


export async function getItems(userId, itemsStateSetter) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsCollection);
        const querySnapshot = await getDocs(itemsQuery);
        let itemsList = [];
        querySnapshot.forEach((docSnap) => {
            let item = {
                id: docSnap.id,
                ...docSnap.data()
            };
            itemsList.push(item);
        });
        itemsStateSetter(itemsList);
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (error) {
        console.log(error);
    }
}