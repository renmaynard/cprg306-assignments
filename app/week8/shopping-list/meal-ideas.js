'use client'

import { useEffect } from "react"
import { useState } from "react"

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async() =>{
        const mealIdea = await fetchMealIdeas(ingredient);
        setMeals(mealIdea);
    }

    useEffect(() =>{
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="mt-10">
            <h1 className="font-xl font-bold mb-5">Meal Ideas with {ingredient}</h1>
            <ul>
                {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
            </ul>
        </div>
    )
}

async function fetchMealIdeas(ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }catch(error){
        console.error("Error:", error);
    }
}
