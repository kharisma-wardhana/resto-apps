class SpinnerLoading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="row center">
          <div class="animloading"><div></div><div></div><div></div><div></div></div>
        </div>`;
  }
}

customElements.define('spinner-loading', SpinnerLoading);
