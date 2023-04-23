const createLogo = (name) => {
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = name;
  return logo;
};

const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('tabs-nav');

  const home = document.createElement('button');
  home.classList.add('nav-button');
  home.textContent = 'Home';
  nav.appendChild(home);

  const menu = document.createElement('button');
  menu.classList.add('nav-button');
  menu.textContent = 'Menu';
  nav.appendChild(menu);

  const contact = document.createElement('button');
  contact.classList.add('nav-button');
  contact.textContent = 'Contact Us';
  nav.appendChild(contact);

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
  body.classList.add('content');

  return body;
}

export default function initialize(restaurantName) {
  const container = document.querySelector('#content');
  container.appendChild(createHeader(restaurantName));
  container.appendChild(createContentContainer());
  container.appendChild(createFooter());
}
