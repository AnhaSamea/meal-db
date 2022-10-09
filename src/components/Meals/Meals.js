import React from 'react';
import { useLoaderData} from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals);
    return (
        <div className='grid grid-cols-2 gap-3 bg-orange-100'>
            
            {
                meals.meals.map(meal=> <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
           
        </div>
    );
};

export default Meals;