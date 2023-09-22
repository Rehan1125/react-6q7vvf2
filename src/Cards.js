import React from 'react';

function Card (recipes) {
  return (
    <div className="Cards">
      <div className="Card">
        <img src={recipes.image} alt="Mypic" className="Card__img" />
        <div className="Card__info">
          <span className="Card__category"> Breakfast </span>
          <h3 className="Card__title">{recipes.title} </h3>
          <p> {recipes.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <a href="" target="blank">
            <button> view more detail </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
