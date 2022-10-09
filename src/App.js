import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';

import Meals from './components/Meals/Meals';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path : '/' ,element: <Main></Main>,children:[
        {path: '/home' ,element: <Home></Home>},
        {path: '/categories',
        element: <Categories></Categories>},
        {path: '/meals',
        loader: async()=>{
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        } ,
        element: <Meals></Meals>},
        {
          path: '/meal/:mealId',
          loader: async({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          },
          element: <MealDetails></MealDetails>
        }
       
      ]
    },
    {
      path: '*', element: <div>This route not found: 404</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
