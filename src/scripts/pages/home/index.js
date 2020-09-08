import '../../components/hero-element/index';
import '../../components/list-resto/index';
import '../../components/item-resto/index';
import '../../components/spinner-loading/index';
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
    if (results !== undefined) {
      setTimeout(() => {
        loadingElement.style.display = 'none';
        restoListElement.restorants = results;
      }, 1500);
    }
  },
};

export default Home;
