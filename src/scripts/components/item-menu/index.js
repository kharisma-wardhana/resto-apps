class ItemMenu extends HTMLElement {
  constructor() {
    super();
  }

  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    // console.log(this._resto);
    this.innerHTML = `
        <div class="row"> 
            ${this._item.name}
        </div>    
    `;
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('item-menu', ItemMenu);
