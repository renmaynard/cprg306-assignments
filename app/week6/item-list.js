'use client';

import {useState} from "react";
import Item from "./item";

export default function ItemList ({items}){
  const [sortBy, setSortBy] = useState("name");

  if(sortBy == "name"){
    items.sort((a,b) => a.name.localeCompare(b.name));
  }
  if(sortBy == "category"){
    items.sort((a,b) => a.category.localeCompare(b.category));
  }

  return(
  <>
  <button value="name" onClick={(event) => {setSortBy(event.target.value)}} className={`rounded text-center border border-white w-24 h-10 ml-16 mt-5 ${sortBy == 'name' ? 'bg-blue-700' : 'bg-blue-950 hover:bg-blue-700'}`}>Name</button>
  <button value="category" onClick={(event) => {setSortBy(event.target.value)}} className={`rounded text-center border border-white w-24 h-10 ml-9 mt-5 ${sortBy == 'category' ? 'bg-blue-700' : 'bg-blue-950 hover:bg-blue-700'}`}>Category</button>
  <ul>
    {items.map((item) => (
      <Item event={item} key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
    ))}
  </ul>
  </>  
  ); 
}