'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState(ItemData);
    const [selectedItemName,setSelectedItemName] = useState("");
    const { user, firebaseSignOut } = useUserAuth();

    const handleAddItem = (event) =>{
        setItems([...items, event]);
    }

    const handleSelectedItemName = (itemName) =>{
        itemName = itemName.split(',', 1)[0].trim();
        itemName = itemName.replace(/\p{Emoji}/gu, '').trim();
        setSelectedItemName(itemName);
    }

    async function handleSignOut(){
        await firebaseSignOut();
    }

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