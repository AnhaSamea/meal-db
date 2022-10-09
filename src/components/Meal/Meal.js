import React from 'react';
import { Link } from 'react-router-dom'

const Meal = ({ meal }) => {
    const { idMeal,strMeal, strCategory, strArea, } = meal;
    return (
        
            <div className='text-orange-900 border-solid border-2 border-orange-500 bg-orange-200 m-4 rounded-lg'>
                <h2 className='text-3xl font-bold p-3'>{strMeal}</h2>
                <p className='p-3'><strong>Category: </strong>{strCategory}</p>
                <p className='p-3'><strong>Area: </strong>{strArea}</p>
                <Link to={`/meal/${idMeal}`}>
                <button className='p-2 m-3 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-orange-50'>Show Details</button>
                </Link>
               
            </div>
       
    );
};

export default Meal;