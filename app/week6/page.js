'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json"
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(ItemData);

    const handleAddItem = (event) =>{
        setItems([...items, event]);
    }
    return(
    <main className="content-center">
    <h1 className="text-3xl font-bold ml-20 mt-6 ">Shopping List</h1>
    <ItemList items={items}/>
    <NewItem onAddItem={handleAddItem}/>
    </main>
    );
}