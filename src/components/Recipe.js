import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
