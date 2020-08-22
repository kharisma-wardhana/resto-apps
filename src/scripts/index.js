import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar/index.js';
import './components/footer/index.js';
import routes from './routes/index.js';
import swRegister from './utils/sw-register';
import UrlParser from './utils/url-parser';

// Load page content
const loadPage = async () => {
  let content = document.querySelector('#maincontent');
  let hashURL = UrlParser.parseActiveUrlWithCombiner();
  if (hashURL == '') hashURL = '/';
  console.log(hashURL);
  const page = routes[hashURL];
  console.log(page);
  content.innerHTML = await page.render();
  await page.afterRender();
  swRegister();
};

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);

let toggleNav = document.getElementById('toggleNav');
toggleNav.addEventListener('click', () => {
  console.log('Clicked');
  let navbarMobile = document.getElementById('navbarResponsive');
  navbarMobile.classList.toggle('show');
});


