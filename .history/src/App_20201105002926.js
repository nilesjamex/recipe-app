import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe'
import './App.css';

const App = () => {
  
  const APP_ID = '1ba037a8';
  const APP_KEY = '6b127dd3105d2cbc085e9845219991e3';

  const [ recipes, setRecipes] = useState([]);
  

  useEffect( () => { 
    getRecipes();
  }, []);

  const cors = "https://cors-anywhere.herokuapp.com/"

  const getRecipes = async () => {
    const response = await fetch(`${cors}https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

   

return(
  <div className='App'>
  <form className="search-form">
    <input className="search-bar" type="text"/>
    <button className="search-button" type="submit">Search</button>
  </form>
  {recipes.map(recipe => (
   <Recipe
   key={recipe.recipe.label}
   title={recipe.recipe.label}
    calories={recipe.recipe.calories} 
   image={recipe.recipe.image} /> 
  ))}
  
  </div>
);
}

export default App;
