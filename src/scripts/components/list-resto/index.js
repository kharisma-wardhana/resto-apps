class ListResto extends HTMLElement {
  constructor() {
    super();
  }

  set restorants(restorants) {
    this._restorants = restorants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    console.log(this._restorants);
    this._restorants.map(_resto => {
      const restoItem = document.createElement('item-resto');
      restoItem.resto = _resto;
      restoItem.classList.add('grid-item', 'card');
      this.appendChild(restoItem);
    });
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('list-resto', ListResto);
