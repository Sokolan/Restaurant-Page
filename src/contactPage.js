import './contact.css';

const createContactSection = (sectionName, sectionClass, sectionText) => {
  const section = document.createElement('div');
  section.classList.add('contact-section');
  section.classList.add(sectionClass);

  const header = document.createElement('p');
  header.classList.add('section-header');
  header.textContent = `${sectionName}:`;
  section.appendChild(header);

  const text = document.createElement('p');
  text.classList.add('section-text');
  text.innerHTML = sectionText;
  section.appendChild(text);

  return section;
};

const createPhoneNumebr = () => createContactSection('Phone Number', 'phone', 'Seafood Hotline: 1-800-SEA-FOODS');

const createEmail = () => createContactSection('Email Address', 'email', 'info@theseashack.com');

const createSolialMedia = () => {
  let socialMediaLinks = '';
  // Add Facebook
  socialMediaLinks += 'Facebook: <a href="https://www.facebook.com/search/top?q=sea%20shack">facebook.com/TheSeaShack</a><br>';
  // Add Twitter
  socialMediaLinks += 'Twitter: <a href="https://twitter.com/search?q=the%20sea%20shack&src=typed_query">@TheSeaShack</a><br>';
  // Add instagram
  socialMediaLinks += 'Instagram: <a href="https://www.instagram.com/">@theseashack</a>';
  return createContactSection('Social Media', 'social-media', socialMediaLinks);
};

const createMailingAdress = () => createContactSection('Mailing Address', 'mail', 'The Sea Shack<br>Seaside Boulevard 3319<br>Harbor Cove, USA');

export default function contactPageCreate() {
  const container = document.querySelector('.tab-container');
  container.appendChild(createPhoneNumebr());
  container.appendChild(createEmail());
  container.appendChild(createSolialMedia());
  container.appendChild(createMailingAdress());
}
