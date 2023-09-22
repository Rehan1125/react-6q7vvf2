import React, { useState } from "react";
import recipesData from "./recipesData";
import Recipe from './Recipe';
import './Card.css';
import menuItems from './components/menuItems';


const NewCard = () => {
  const [items, setitems] = useState(recipesData);
  const filterrecipes = (category) => {
    const updateditems = recipes.filter(parameter) category: any
    return currentElement.category === category;
  });
  setitems(updateditems);
}
return (
  <>
    <h1 className="mt-5 text-center main-heading">Recipe Website</h1>
    <hr />
    <div className="menu-tabs container">
      <div className="menu-tabs display-flex justify-content-around">
        <button className="btn btn-warning" onclick={() => filterrecipes('Breakfast')}>Breakfast</button>
        <button className="btn btn-warning" onclick={() => filterrecipes('Lunch')}>Lunch</button>
        <button className="btn btn-warning" onclick={() => filterrecipes('Evening')}>Evening</button>
        <button className="btn btn-warning" onclick={() => filterrecipes('Dinner')}>Dinner</button>
      </div>
    </div>
    <menuItems items={items} />
  </>
);
     }
export default NewCard;
