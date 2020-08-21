import API_ENDPOINT from '../../utils/api';
class ItemResto extends HTMLElement {
  constructor() {
    super();
  }

  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    // console.log(this._resto);
    this.innerHTML = `
        <div class="row resto-name"> 
          <span>${this._resto.name}</span>
        </div>
        <div class="row">
          <span class="rate">${this._resto.rating}</span>
          <img class="thumbnail" src="${API_ENDPOINT.PICTURE(this._resto.pictureId)}" alt="${this._resto.name}">
        </div>
        <span class="desc">${this._resto.description}</span>
        <span>${this._resto.city}</span>
        <a href="#/details/${this._resto.id}" class="detail">
          More Info
        </a>
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('item-resto', ItemResto);
