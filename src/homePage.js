import './home.css';

const createAbout = () => {
  const about = document.createElement('p');
  about.innerHTML = '<b>"The Sea Shack"</b> is a seafood restaurant located in a coastal town, known for its fresh and locally-sourced seafood dishes. The restaurant has a casual and relaxed atmosphere, with a rustic decor that evokes a beachside vibe. The menu features a variety of seafood options, from classic fish and chips to grilled octopus and lobster rolls. In addition to seafood, the restaurant also offers vegetarian and gluten-free options. The bar serves a selection of craft beers, wines, and cocktails, with a focus on coastal-inspired drinks. The Sea Shack is a popular spot for locals and tourists alike, offering a fun and delicious dining experience with friendly service and <b>stunning</b> ocean views.';
  about.classList.add('about');
  return about;
};

const createOpeningHours = () => {
  const openingHours = document.createElement('p');
  openingHours.innerHTML = '<u>Monday</u> : Closed<br><u>Tuesday - Thursday</u> : 11:00 AM - 9:00 PM<br><u>Friday - Saturday</u>: 11:00 AM - 10:00 PM<br><u>Sunday</u>: 12:00 PM - 8:00 PM';
  openingHours.classList.add('opening-hours');
  return openingHours;
};

const createLocation = () => {
  const location = document.createElement('p');
  location.innerHTML = 'The Sea Shack<br>123 Main Street<br>Harbor Cove, USA';
  location.classList.add('location');
  return location;
};

const createHomeContainer = () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-tab');
  homeContainer.appendChild(createAbout());
  homeContainer.appendChild(createOpeningHours());
  homeContainer.appendChild(createLocation());
  return homeContainer;
};

export default function homePageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createHomeContainer());
}
