import '../../components/spinner-loading/index';
import '../../components/list-resto/index';
import '../../components/item-resto/index';
import FavResto from '../../data/fav-restoDB';

const Favorite = {
  async render() {
    return `
    <section id="section-fav">
        <h2 class="row center white-text py-20">List Favorite Resto</h2>
        <spinner-loading></spinner-loading>
        <span id="fav-notfound" class="row center white-text hide">Belum ada restaurant yang Anda sukai</span>
        <list-resto class="grid-container"></list-resto>
    </section>`;
  },
  async afterRender() {
    const restoListElement = document.querySelector('list-resto');
    const results = await FavResto.getAllRestoes();
    const loadingElement = document.querySelector('spinner-loading');
    if (results !== undefined) {
      setTimeout(() => {
        loadingElement.style.display = 'none';
        if (results.length === 0) {
          const favInfo = document.querySelector('#fav-notfound');
          favInfo.classList.toggle('hide');
        }
        restoListElement.restorants = results;
      }, 1500);
    }
  },
};

export default Favorite;
