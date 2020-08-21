import '../../components/spinner-loading/index.js';
import '../../components/details-resto/index.js';
import '../../components/list-menu/index.js';
import '../../components/item-menu/index.js';
import '../../components/review-customer/index.js';
import RestoData from '../../data/resto';
import UrlParser from '../../utils/url-parser';

const Details = {
  async render() {
    return `
        <div>Details</div>
        <spinner-loading></spinner-loading>
        <section id="resto"></section>
        <div class="row center">MENU</div>    
        <section id="menus"></section>
        <div class="row center">
            <button class="fav">
               Favorite
            </button>
        </div>
        <review-customer></review-customer>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
    const _details = await RestoData.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    const detailResto = document.createElement('detail-resto');
    detailResto.resto = _details.restaurant;
    restoContainer.innerHTML = detailResto.innerHTML;
    const menuContainer = document.querySelector('#menus');
    const listMenu = document.createElement('list-menu');
    listMenu.menus = _details.restaurant.menus;
    menuContainer.innerHTML = listMenu.innerHTML;
  },
};

export default Details;
