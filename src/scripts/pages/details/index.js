import '../../components/spinner-loading/index.js';
import '../../components/details-resto/index.js';
import '../../components/list-menu/index.js';
import '../../components/item-menu/index.js';
import '../../components/review-customer/index.js';
import RestoData from '../../data/resto';
import UrlParser from '../../utils/url-parser';
import FavResto from '../../data/fav-restoDB';

const Details = {
  async render() {
    return `
        <section class="container pt-20 white-text">
          <spinner-loading></spinner-loading>
          <div id="resto"></div>
        </section>
        
        <section class="container">
          <div class="row center white-text bg-dark"><h4>Menu</h4></div>    
          <div id="menus" class="container white-text"></div>
        </section>

        <section class="container">
          <div class="row center white-text bg-dark"><h4>Review</h4></div> 
          <review-customer></review-customer>
        </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
    const _details = await RestoData.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    const detailResto = document.createElement('detail-resto');
    detailResto.resto = _details.restaurant;
    const loadingElement = document.querySelector('spinner-loading');
    if (_details != undefined) {
      setTimeout(function () { loadingElement.style.display = 'none'; }, 1500);
    }
    restoContainer.innerHTML = detailResto.innerHTML;
    const menuContainer = document.querySelector('#menus');
    const listMenu = document.createElement('list-menu');
    listMenu.menus = _details.restaurant.menus;
    menuContainer.innerHTML = listMenu.innerHTML;

    const btnFav = document.querySelector('.fav');
    btnFav.addEventListener('click', () => {
      console.log('add Favorite Resto');
      FavResto.putResto(_details.restaurant);
    });
  },
};

export default Details;
