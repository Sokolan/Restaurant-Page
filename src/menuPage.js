import chocolateCake from './menu-img/Chocolate mousse.jpg';
import crabCake from './menu-img/crab-cake.jpg';
import roastedPotatoes from './menu-img/Garlic butter roasted potatoes.jpg';
import grilledAsparagus from './menu-img/Grilled asparagus.jpg';
import grilledSalmon from './menu-img/Grilled salmon.jpg';
import icedTea from './menu-img/Iced tea.jpg';
import limePie from './menu-img/Key lime pie.jpg';
import lemonade from './menu-img/Lemonade.jpg';
import lobsterRoll from './menu-img/Lobster roll.jpg';
import seafoodLinguine from './menu-img/Seafood linguine.jpg';
import shrimpsCocktail from './menu-img/Shrimp cocktail.jpg';
import sparklingWater from './menu-img/Sparkling water.jpg';
import './menu.css';

const createClassedParagraph = (className, text) => {
  const paragraph = document.createElement('p');
  paragraph.classList.add(className);
  paragraph.textContent = text;
  return paragraph;
};

const createDish = (dishName, description, price) => {
  const dish = document.createElement('div');
  dish.classList.add('dish');
  dish.appendChild(createClassedParagraph('dish-name', dishName));
  dish.appendChild(createClassedParagraph('dish-description', description));
  dish.appendChild(createClassedParagraph('dish-price', `$${price}`));
  return dish;
};

const createType = (type) => {
  const container = document.createElement('p');
  container.classList.add('type');
  container.textContent = type;
  return container;
}

const createStarters = () => {
  const startesContainer = document.createElement('div');
  startesContainer.classList.add('starters');
  startesContainer.appendChild(createType('Starters'));

  const crabCakeImg = new Image();
  crabCakeImg.src = crabCake;
  let dish = createDish('Crab cakes', 'These crispy cakes are made with fresh, locally sourced crab meat, lightly seasoned with Old Bay seasoning, and served with a tangy remoulade sauce.', 10);
  dish.appendChild(crabCakeImg);
  startesContainer.appendChild(dish);
  const shrimpsCocktailImg = new Image();
  shrimpsCocktailImg.src = shrimpsCocktail;
  dish = createDish('Shrimp cocktail', 'Chilled shrimp served with our signature cocktail sauce, featuring fresh horseradish, ketchup, lemon juice, and Worcestershire sauce.', 12);
  dish.appendChild(shrimpsCocktailImg);
  startesContainer.appendChild(dish);
  return startesContainer;
};

export default function menuPageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createStarters());
}
