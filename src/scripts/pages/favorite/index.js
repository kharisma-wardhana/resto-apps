import '../../components/spinner-loading/index.js';
import '../../components/list-resto/index.js';
import '../../components/item-resto/index.js';
import FavResto from '../../data/fav-restoDB.js';

const Favorite = {
  async render() {
    return `
    <section id="section-fav">
        <h2 class="row center white-text py-20">List Favorite Resto</h2>
        <spinner-loading></spinner-loading>
        <list-resto class="grid-container"></list-resto>
    </section>`;
  },
  async afterRender() {
    const restoListElement = document.querySelector('list-resto');
    const results = await FavResto.getAllRestoes();
    const loadingElement = document.querySelector('spinner-loading');
    if (results != undefined) {
      setTimeout(function () { loadingElement.style.display = 'none'; }, 1500);
    }
    restoListElement.restorants = results;
  },
};

export default Favorite;
