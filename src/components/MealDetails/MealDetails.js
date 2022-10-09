import React from 'react';
import { useLoaderData } from 'react-router-dom';
const MealDetails = () => {
    const meal = useLoaderData();
    console.log(meal.meals[0]);
    const {strMeal,strInstructions} = meal.meals[0];
    return (
        <div className='text-orange-900 border-solid border-2 border-orange-500 bg-orange-200 m-4 rounded-lg'>
            <h2 className='text-3xl font-bold p-3'>Details of  {strMeal}</h2>
            <p className='p-3'>{strInstructions}</p>
        </div>
    );
};

export default MealDetails;