import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar/index.js';
import './components/footer/index.js';
import './components/hero-element/index.js';
import './components/list-resto/index.js';
import './components/item-resto/index.js';
import RestoData from './data/resto';

const restoListElement = document.querySelector('list-resto');

const renderList = async () => {
  const results = await RestoData.getAllData();
  restoListElement.restorants = results.restaurants;

  let restoImg = document.getElementsByClassName('thumbnail');
  for (let i = 0; i < restoImg.length; i++) {
    restoImg[i].addEventListener('click', () => {
      console.log('show desc');
      let rowImg = restoImg[i].parentElement;
      let desc = rowImg.nextElementSibling;
      rowImg.classList.toggle('hide');
      desc.classList.toggle('show');
    });
  }
};

document.addEventListener('DOMContentLoaded', renderList);

let toggleNav = document.getElementById('toggleNav');
toggleNav.addEventListener('click', () => {
  console.log('Clicked');
  let navbarMobile = document.getElementById('navbarResponsive');
  navbarMobile.classList.toggle('show');
});
