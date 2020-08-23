class ListMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this.innerHTML = '<strong>Foods</strong>';
    // console.log(this._restorants);

    this._menus.foods.map((_food) => {
      const menuItem = document.createElement('item-menu');
      menuItem.item = _food;
      return this.appendChild(menuItem);
    });

    this.innerHTML += '<strong>Drinks</strong>';
    this._menus.drinks.map((_drink) => {
      const menuItem = document.createElement('item-menu');
      menuItem.item = _drink;
      return this.appendChild(menuItem);
    });
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('list-menu', ListMenu);
