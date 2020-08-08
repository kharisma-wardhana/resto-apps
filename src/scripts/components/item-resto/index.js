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
          <img class="thumbnail" src="${this._resto.pictureId}" alt="resto-image">
        </div>
        <span class="desc">${this._resto.description}</span>
        <button class="info">
          ${this._resto.city}
        </button>
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('item-resto', ItemResto);
