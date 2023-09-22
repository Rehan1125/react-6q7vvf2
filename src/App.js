import React from 'react';
//import './App.css';
import RecipeList from './components/RecipeList';
import recipes from './data/recipesData';
import Cards from './Cards';
im
function App() {
  return (
    <div className="App">
      <h1 style = {{}}>Recipe Website</h1>
        
      <RecipeList recipes={recipes} />
    </div>
  );
  
}

export default App;
