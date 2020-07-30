class ItemResto extends HTMLElement {
  constructor() {
    super();
  }

  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    console.log(this._resto);
    this.innerHTML = `
        <div class="row resto-name"> 
          ${this._resto.name}
        </div>
        <div class="row">
          <img class="thumbnail" src="${this._resto.pictureId}">
        </div>
        <div class="row info">
          <span class="location">Lokasi: ${this._resto.city}</span>
          <span class="rate">Rating: ${this._resto.rating}</span>
        </div>
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('item-resto', ItemResto);
