import initializePage from './initial';
import homePageCreate from './homePage';
import menuPageCreate from './menuPage';
import contactPageCreate from './contactPage';
import './style.css';

let activeTab;

const pages = ['home', 'menu', 'contact'];

const clearTab = () => {
  document.querySelector('.tab-container').replaceChildren();
};

const manageTabs = (event) => {
  if (event.target.classList.contains(activeTab)) {
    return;
  }

  // Clear current tab and reset selected tab
  clearTab();
  document.querySelector(`.${activeTab}`).classList.toggle('selected');

  for (let i = 0; i < pages.length; i += 1) {
    if (!event.target.classList.contains(pages[i])) {
      // eslint-disable-next-line no-continue
      continue;
    }

    activeTab = pages[i];
    document.querySelector(`.${pages[i]}`).classList.toggle('selected');
    switch (i) {
      case 0:
        homePageCreate();
        break;
      case 1:
        menuPageCreate();
        break;
      case 2:
        contactPageCreate();
        break;
      default:
        console.log(`no page num: ${i}`);
    }
  }
};

const setEventListeners = () => {
  document.querySelectorAll('.tabs-nav > *').forEach((tab) => tab.addEventListener('click', manageTabs));
};

const initializeLogic = () => {
  setEventListeners();
  homePageCreate();
  activeTab = 'home';
  document.querySelector(`.${activeTab}`).classList.toggle('selected');
};

initializePage('The Sea Shack');
initializeLogic();
