import '../../components/spinner-loading/index';
import '../../components/details-resto/index';
import '../../components/list-menu/index';
import '../../components/item-menu/index';
import '../../components/review-customer/index';
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
          <div class="row center white-text bg-dark"><h4>Category</h4></div>    
          <div id="category" class="container white-text"></div>
        </section>
        
        <section class="container">
          <div class="row center white-text bg-dark"><h4>Menu</h4></div>    
          <div id="menus" class="container white-text"></div>
        </section>

        <section class="container">
          <div class="row center white-text bg-dark"><h4>Reviews</h4></div> 
          <div id="reviews" class="container white-text"></div>
        </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const _details = await RestoData.detailResto(url.id);
    const loadingElement = document.querySelector('spinner-loading');
    if (_details !== undefined) {
      setTimeout(() => {
        loadingElement.style.display = 'none';
      }, 500);
    }

    const restoContainer = document.querySelector('#resto');
    const detailResto = document.createElement('detail-resto');

    detailResto.resto = _details;
    restoContainer.innerHTML = detailResto.innerHTML;

    const catContainer = document.querySelector('#category');
    _details.categories.map((_category) => {
      const catItem = document.createElement('ul');
      catItem.innerHTML = `<li>${_category.name}</li>`;
      return catContainer.appendChild(catItem);
    });

    const menuContainer = document.querySelector('#menus');
    const listMenu = document.createElement('list-menu');
    listMenu.menus = _details.menus;
    menuContainer.innerHTML = listMenu.innerHTML;

    const reviewContainer = document.querySelector('#reviews');
    const reviewCustomer = document.createElement('review-customer');
    reviewCustomer.reviews = _details.consumerReviews;
    reviewContainer.innerHTML = reviewCustomer.innerHTML;

    const btnFav = document.querySelector('.fav');
    const iconFav = document.querySelector('.iconFav');
    const isAlreadySaved = await FavResto.getResto(url.id);
    console.log(!!isAlreadySaved);
    if (isAlreadySaved) {
      iconFav.classList.remove('far');
      iconFav.classList.add('fas');
    }

    btnFav.addEventListener('click', async () => {
      iconFav.classList.toggle('far');
      iconFav.classList.toggle('fas');

      if (isAlreadySaved) {
        console.log('delete from favorite');
        FavResto.deleteResto(url.id);
      } else {
        console.log('add Favorite Resto');
        FavResto.putResto(_details);
      }
    });
  },
};

export default Details;
