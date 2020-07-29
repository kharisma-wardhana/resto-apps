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
        <div class="col">
            ${this._resto.name}
        </div>
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('item-resto', ItemResto);
