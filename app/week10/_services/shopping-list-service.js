import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems({userId}){
    try{
    const items = [];
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
        items.push({id: doc.id, data: doc.data()});
    });
    return items;
    }catch(error){
        console.error('item not found', error);
    }
}

export async function addItems({userId, item}){
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
}
