import '../../components/hero-element/index.js';
import '../../components/list-resto/index.js';
import '../../components/item-resto/index.js';
import '../../components/spinner-loading/index.js';
import RestoData from '../../data/resto';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <spinner-loading></spinner-loading>
      <list-resto class="grid-container"></list-resto>
    `;
  },

  async afterRender() {
    const restoListElement = document.querySelector('list-resto');
    const loadingElement = document.querySelector('spinner-loading');
    const results = await RestoData.getAllDataAPI();
    if (results != undefined) {
      setTimeout(function () { loadingElement.style.display = 'none'; }, 1500);
    }
    restoListElement.restorants = results;
  },
};

export default Home;
