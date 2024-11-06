"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (!response.ok) {
            console.log(response.status);
        }
        const data = await response.json();
        return data.meals || [];
        } catch (error) {
        console.error("Failed to fetch meal ideas:", error);
        return [];
        }
    }

    function loadMealIdeas() {
        fetchMealIdeas(ingredient).then((data) => {
        setMeals(data);
        });
    }

    useEffect(() => {
        if (ingredient) {
        loadMealIdeas();
        }
    }, [ingredient]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Meal Ideas</h1>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <span className="text-xl font-semibold">{meal.strMeal}</span>
              </div>
            </li>
          ))
        ) : (
          <p>No meal ideas found for "{ingredient}".</p> // Display message if no meals are found
        )}
      </ul>
    </div>
  );
}