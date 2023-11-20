'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import {getItems,addItems} from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState([]);
    const [selectedItemName,setSelectedItemName] = useState("");
    const { user, firebaseSignOut } = useUserAuth();

    const loadItems = async () =>{
        try{
        const getI = await getItems({userId: user.uid});
        setItems([...items, getI]);
        }catch(error){
            console.error('error loading items', error);
        }
    }

    const handleAddItem = (newItem) =>{
        const id = addItems({userId:user.uid, item:newItem});
        newItem.id = id;
        setItems([...items, newItem]);
    }

    const handleSelectedItemName = (itemName) =>{
        itemName = itemName.split(',', 1)[0].trim();
        itemName = itemName.replace(/\p{Emoji}/gu, '').trim();
        setSelectedItemName(itemName);
    }

    async function handleSignOut(){
        await firebaseSignOut();
    }

    useEffect(() =>{
        loadItems();
    }, []);

    if(user != null){
        return(
        <main className="content-center flex flex-wrap">
            <div className="w-1/3">
            <h1 className="text-3xl font-bold ml-20 mt-6 ">Shopping List</h1>
            <ItemList 
            items={items} 
            onItemSelect={selectedItemName => handleSelectedItemName(selectedItemName)}
            />
            <NewItem 
            onAddItem={handleAddItem}
            />
            </div>
            <div className="w-1/3 ml-10">
            <MealIdeas 
            ingredient={selectedItemName}
            />
            </div>
            <div className="mt-6">
                <button onClick={handleSignOut}>Log Out</button>
            </div>
        </main>
        );
    }
    else{
        return(
        <Link href='./'>Back Home</Link>
        );
    }
}