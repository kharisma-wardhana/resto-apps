import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css/main.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './components/app-bar/index';
import './components/footer/index';
import routesObj from './routes/index';
import swRegister from './utils/sw-register';
import UrlParser from './utils/url-parser';

// Load page content
const loadPage = async () => {
  let hashURL = UrlParser.parseActiveUrlWithCombiner();
  if (hashURL === '') hashURL = '/';
  console.log(hashURL);
  const page = await routesObj[hashURL];
  const renderPage = await page.render();
  const content = document.querySelector('#maincontent');
  console.log(content);
  content.innerHTML = renderPage;
  await page.afterRender();
  swRegister();
};

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);

const navLink = document.querySelectorAll('.nav_link');
for (let i = 0; i < navLink.length; i += 1) {
  navLink[i].addEventListener('click', () => {
    console.log('navlink clicked');
    if (i > 0) {
      navLink[i].parentElement.previousElementSibling.classList.toggle('active');
    } else {
      navLink[i].parentElement.nextElementSibling.classList.toggle('active');
    }
    navLink[i].parentElement.classList.toggle('active');
  });
}

const toggleNav = document.getElementById('toggleNav');
toggleNav.addEventListener('click', () => {
  console.log('Clicked');
  const navbarMobile = document.getElementById('navbarResponsive');
  navbarMobile.classList.toggle('show');
});
