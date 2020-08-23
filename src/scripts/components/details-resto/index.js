import API_ENDPOINT from '../../utils/api';

class DetailResto extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    // console.log(this._resto);
    this.innerHTML = `
        <div class="row space-around py-20">
          <h3>${this._resto.rating} <i class="fas fa-star"></i></h3>
          <h3>${this._resto.name}</h3>
          <button class="fav bg-dark"><i class="iconFav far fa-heart"></i></button>
        </div>
        <section>
          <img src="${API_ENDPOINT.PICTURE(this._resto.pictureId)}" alt="${this._resto.name}" width="100%">
        </section>
        
        <section>
          <div class="row center white-text bg-dark"><h4>Address</h4></div>  
          <address>${this._resto.address}, ${this._resto.city}</address>
        </section>

        <section>
          <div class="row center white-text bg-dark"><h4>Description</h4></div>    
            ${this._resto.description}
        </section>
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('detail-resto', DetailResto);
