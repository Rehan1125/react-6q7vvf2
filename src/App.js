import React from 'react';
//import './App.css';
import RecipeList from './components/RecipeList';
import recipes from './data/recipesData';
import Cards from './Cards';
import NewCard from './components/NewCard';
function App() {
  return (
    <div className="App">
      <h1 style = {{}}>Recipe Website</h1>
        <NewCard />
      fghfghrt<RecipeList recipes={recipes} />
    </div>
  );
  
}

export default App;
