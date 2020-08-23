import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar/index';
import './components/footer/index';
import routes from './routes/index';
import swRegister from './utils/sw-register';
import UrlParser from './utils/url-parser';

// Load page content
const loadPage = async () => {
  const content = document.querySelector('#maincontent');
  let hashURL = UrlParser.parseActiveUrlWithCombiner();
  if (hashURL === '') hashURL = '/';
  console.log(hashURL);
  const page = routes[hashURL];
  console.log(page);
  content.innerHTML = await page.render();
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
