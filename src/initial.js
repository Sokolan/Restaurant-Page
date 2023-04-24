const createLogo = (name) => {
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = name;
  return logo;
};

const createNavButton = (buttonName, buttonText) => {
  const button = document.createElement('button');
  button.classList.add('nav-button');
  button.classList.add(`${buttonName}`);
  button.textContent = buttonText;
  return button;
};

const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('tabs-nav');

  nav.appendChild(createNavButton('home', 'Home'));
  nav.appendChild(createNavButton('menu', 'Menu'));
  nav.appendChild(createNavButton('contact', 'Contact Us'));

  return nav;
};

const createHeader = (restaurantName) => {
  const header = document.createElement('div');
  header.classList.add('header');
  header.appendChild(createLogo(restaurantName));
  header.appendChild(createNav());

  return header;
};

const createFooter = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const credits = document.createElement('p');
  credits.classList.add('credits');
  const creditsLink = document.createElement('a');
  creditsLink.setAttribute('href', 'https://www.pexels.com/photo/brown-wooden-boat-on-sea-5599602/');
  creditsLink.textContent = 'Photo by cottonbro studio';
  credits.appendChild(creditsLink);
  footer.appendChild(credits);

  const createdBy = document.createElement('p');
  createdBy.classList.add('created-by');
  createdBy.textContent = 'Created By Sokolan';
  footer.appendChild(createdBy);

  return footer;
};

const createContentContainer = () => {
  const body = document.createElement('div');
  body.classList.add('tab-container');

  return body;
};

export default function initialize(restaurantName) {
  const container = document.querySelector('#content');
  container.appendChild(createHeader(restaurantName));
  container.appendChild(createContentContainer());
  container.appendChild(createFooter());
}
