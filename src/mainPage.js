const createAbout = () => {
  const about = document.createElement('p');
  about.textContent = 'The Sea Shack" is a seafood restaurant located in a coastal town, known for its fresh and locally-sourced seafood dishes. The restaurant has a casual and relaxed atmosphere, with a rustic decor that evokes a beachside vibe. The menu features a variety of seafood options, from classic fish and chips to grilled octopus and lobster rolls. In addition to seafood, the restaurant also offers vegetarian and gluten-free options. The bar serves a selection of craft beers, wines, and cocktails, with a focus on coastal-inspired drinks. The Sea Shack is a popular spot for locals and tourists alike, offering a fun and delicious dining experience with friendly service and stunning ocean views.';

  return about;
};

const createOpeningHours = () => {
  const openingHours = document.createElement('p');
  openingHours.innerHTML = 'Monday: Closed<br>Tuesday - Thursday: 11:00 AM - 9:00 PM<br>Friday - Saturday: 11:00 AM - 10:00 PM<br>Sunday: 12:00 PM - 8:00 PM';
  return openingHours;
};

const createLocation = () => {
  const location = document.createElement('p');
  location.textContent = 'The Sea Shack<br>123 Main Street<br>Harbor Cove, USA';
  return location;
};

const setHomeButtonClicked = () => {
  const home = document.querySelector('.home');
  home.classList.add('selected');
};

export default function mainPageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createAbout());
  container.appendChild(createOpeningHours());
  container.appendChild(createLocation());
  setHomeButtonClicked();
}
