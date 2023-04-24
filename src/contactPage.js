const createPhoneNumebr = () => {
  const phone = document.createElement('p');
  phone.innerHTML = 'Phone Number:<br>Seafood Hotline: 1-800-SEA-FOODS';
  return phone;
};

const createEmail = () => {
  const email = document.createElement('p');
  email.innerHTML = 'Email Address:<br>info@theseashack.com';
  return email;
};

const createSolialMedia = () => {
  const social = document.createElement('p');
  social.innerHTML = 'Social Media:<br>';
  // Add Facebook
  social.innerHTML += 'Facebook: <a href="https://www.facebook.com/search/top?q=sea%20shack">facebook.com/TheSeaShack</a><br>';
  // Add Twitter
  social.innerHTML += 'Twitter: <a href="https://twitter.com/search?q=the%20sea%20shack&src=typed_query">@TheSeaShack</a><br>';
  // Add instagram
  social.innerHTML += 'Instagram: <a href="https://www.instagram.com/">@theseashack</a>';
  return social;
};

const createMailingAdress = () => {
  const mailing = document.createElement('p');
  mailing.innerHTML = 'Mailing Address:<br>';
  // Add Name
  mailing.innerHTML += 'The Sea Shack<br>';
  // Add street and zip
  mailing.innerHTML += 'Seaside Boulevard 3319<br>';
  // Add state
  mailing.innerHTML += 'Harbor Cove, USA';
  return mailing;
};

export default function contactPageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createPhoneNumebr());
  container.appendChild(createEmail());
  container.appendChild(createSolialMedia());
  container.appendChild(createMailingAdress());
}
