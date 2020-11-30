import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = '1ba037a8';
  const APP_KEY = '6b127dd3105d2cbc085e9845219991e3';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app-key=${APP_KEY}`;


return(
  <div className='App'>
  <form className="search-form">
    <input className="search-bar" type="text"/>
    <button className="search-button" type="submit">Search</button>
  </form>
  </div>
);
}

export default App;
