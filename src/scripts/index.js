import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar/index.js';
import './components/hero-element/index.js';
import './components/list-resto/index.js';
import './components/item-resto/index.js';
import RestoData from './data/resto';

const restoListElement = document.querySelector('list-resto');

const renderList = async () => {
  const results = await RestoData.getAllData();
  restoListElement.restorants = results.restaurants;
};

document.addEventListener('DOMContentLoaded', renderList);
