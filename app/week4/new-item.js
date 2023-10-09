'use client';

import {useState} from 'react';

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        let message = "\nname: " + item.name + "\nquantity: " + item.quantity + "\ncategory: " + item.category;
        alert(message);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    return(
        <>
        <div className="flex flex-col justify-evenly items-center max-w-full">
            <form onSubmit={handleSubmit}>
            <label className="block">
                <input 
                    type="text" 
                    value={name}
                    onChange={(event) => {setName(event.target.value)}} 
                    required
                    className="mt-1 w-64 p-1 ml-10 block rounded-md text-black "
                />
            </label>
            <div className="grid grid-cols-2">
            <label className="block mt-2">
                <input 
                    type="number" 
                    min={1} 
                    max={99} 
                    value={quantity}
                    onChange={(event)=>{setQuantity(Number(event.target.value))}} 
                    required
                    className="p-1 ml-10 block rounded-md text-black"
                />
            </label>

            <label className="block mt-2">
                <select 
                value={category} 
                onChange={(event) => {setCategory(event.target.value)}}  
                className=" ml-1 p-1 block rounded-md text-black"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </label>
            </div>
                <button 
                type="submit" 
                onClick={handleSubmit} 
                className="w-64 h-10 mt-2 ml-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                +
                </button>
            </form>
        </div>
        </>
    );
}