'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(ItemData);
    const [selectedItemName,setSelectedItemName] = useState("");
    let cleanName = selectedItemName.split(',');
    cleanName = cleanName[0];

    const handleAddItem = (event) =>{
        setItems([...items, event]);
    }

    const handleSelectedItemName = (itemName) =>{
        itemName = itemName.split(',', 1)[0].trim();
        itemName = itemName.replace(/\p{Emoji}/gu, '').trim();
        setSelectedItemName(itemName);
    }


    return(
    <main className="content-center flex flex-wrap">
        <div className="w-1/2">
        <h1 className="text-3xl font-bold ml-20 mt-6 ">Shopping List</h1>
        <ItemList 
        items={items} 
        onItemSelect={selectedItemName => handleSelectedItemName(selectedItemName)}
        />
        <NewItem 
        onAddItem={handleAddItem}
        />
        </div>
        <div className="w-1/2">
        <MealIdeas 
        ingredient={cleanName}
        />
        </div>
    </main>
    );
}