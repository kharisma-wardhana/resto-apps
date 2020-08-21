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
    const results = await RestoData.getAllDataAPI();
    restoListElement.restorants = results.restaurants;

    let btnInfo = document.getElementsByClassName('info');
    for (let i = 0; i < btnInfo.length; i++) {
      let desc = btnInfo[i].previousElementSibling;
      btnInfo[i].addEventListener('click', () => {
        desc.classList.toggle('show');
      });
    }
  },
};

export default Home;
