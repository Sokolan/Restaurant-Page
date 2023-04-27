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
};

const createDishWithImg = (dishName, dishDescription, dishPrice, imgSrc) => {
  const dish = createDish(dishName, dishDescription, dishPrice);
  const img = new Image();
  img.src = imgSrc;
  dish.appendChild(img);
  return dish;
};

const createStarters = () => {
  const startesContainer = document.createElement('div');
  startesContainer.classList.add('starters');
  startesContainer.appendChild(createType('Starters'));

  startesContainer.appendChild(createDishWithImg('Crab cakes', 'These crispy cakes are made with fresh, locally sourced crab meat, lightly seasoned with Old Bay seasoning, and served with a tangy remoulade sauce.', 10, crabCake));

  startesContainer.appendChild(createDishWithImg('Shrimp cocktail', 'Chilled shrimp served with our signature cocktail sauce, featuring fresh horseradish, ketchup, lemon juice, and Worcestershire sauce.', 12, shrimpsCocktail));

  return startesContainer;
};

const createEntrees = () => {
  const entrees = document.createElement('div');
  entrees.classList.add('entrees');
  entrees.appendChild(createType('Entrees'));

  entrees.appendChild(createDishWithImg('Grilled salmon', 'Fresh salmon fillet grilled to perfection with lemon and herbs, and served with a side of grilled asparagus and roasted baby potatoes.', 18, grilledSalmon));

  entrees.appendChild(createDishWithImg('Lobster roll', 'This classic New England-style lobster roll features buttery, toasted brioche bread, stuffed with juicy chunks of fresh lobster meat and a hint of mayo. Served with a side of fries.', 22, lobsterRoll));

  entrees.appendChild(createDishWithImg('Seafood linguine', 'Our linguine is tossed with a savory blend of shrimp, mussels, and clams, sautéed in garlic and white wine, and finished with a sprinkle of fresh parsley.', 20, seafoodLinguine));
  return entrees;
};

const createSides = () => {
  const sides = document.createElement('div');
  sides.classList.add('sides');
  sides.appendChild(createType('Sides'));

  sides.appendChild(createDishWithImg('Garlic butter roasted potatoes', 'These tender baby potatoes are roasted to perfection with a generous coating of garlic butter and fresh herbs.', 6, roastedPotatoes));

  sides.appendChild(createDishWithImg('Grilled asparagus', 'Fresh asparagus spears are lightly seasoned with sea salt and grilled to perfection for a crispy, delicious side dish.', 8, grilledAsparagus));

  return sides;
};

const createDesserts = () => {
  const desserts = document.createElement('div');
  desserts.classList.add('desserts');
  desserts.appendChild(createType('Desserts'));

  desserts.appendChild(createDishWithImg('Key lime pie', 'This tart and sweet pie features a creamy, tangy key lime filling with a buttery graham cracker crust and a dollop of whipped cream on top.', 7, limePie));

  desserts.appendChild(createDishWithImg('Chocolate mousse', 'Indulge in our decadent chocolate mousse, made with premium dark chocolate and whipped to perfection for a silky smooth texture.', 8, chocolateCake));

  return desserts;
};

const createDrinks = () => {
  const drinks = document.createElement('div');
  drinks.classList.add('drinks');
  drinks.appendChild(createType('Drinks'));

  drinks.appendChild(createDishWithImg('Sparkling water', 'Our carbonated mineral water is refreshing and hydrating, perfect for cleansing your palate between bites of delicious seafood.', 3, sparklingWater));

  drinks.appendChild(createDishWithImg('Lemonade', 'Our freshly-squeezed lemonade is the perfect blend of tart and sweet, made with pure cane sugar and served over ice.', 4, lemonade));

  drinks.appendChild(createDishWithImg('Iced tea', 'Our classic iced tea is brewed to perfection and served with a wedge of fresh lemon for a refreshing beverage to pair with your meal.', 3, icedTea));

  return drinks;
};

export default function menuPageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createStarters());
  container.appendChild(createEntrees());
  container.appendChild(createSides());
  container.appendChild(createDesserts());
  container.appendChild(createDrinks());
}
