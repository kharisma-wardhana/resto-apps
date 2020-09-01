class ListMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    // console.log(this._restorants);
    const rowItem = document.createElement('div');
    rowItem.classList.add('row');
    this.appendChild(rowItem);
    const colItemL = document.createElement('div');
    colItemL.classList.add('col');
    colItemL.innerHTML += '<strong>Foods</strong>';
    rowItem.appendChild(colItemL);
    this._menus.foods.map((_food) => {
      const menuItem = document.createElement('item-menu');
      menuItem.item = _food;
      return colItemL.appendChild(menuItem);
    });
    const colItemR = document.createElement('div');
    colItemR.classList.add('col');
    colItemR.innerHTML += '<strong>Drinks</strong>';
    rowItem.appendChild(colItemR);
    this._menus.drinks.map((_drink) => {
      const menuItem = document.createElement('item-menu');
      menuItem.item = _drink;
      return colItemR.appendChild(menuItem);
    });
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('list-menu', ListMenu);
