import React from 'react';

function Card() {
  return (
    <div className="Cards">
      <div className="Card">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbakerbynature.com%2Fsoft-batch-chocolate-chip-cookies%2F&psig=AOvVaw0I7Yo1w7lskJ7ho7USfdaI&ust=1694893468102000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCAr6qwrYEDFQAAAAAdAAAAABAE" alt="Mypic" className="Card__img" />
        <div className="Card__info">
          <span className="Card__category"> Breakfast </span>
          <h3 className="Card__title">{recipes.title} </h3>
          <p> {recipes.description}</p>
          
        
          <a href="" target="blank">
            <button> view more detail </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
