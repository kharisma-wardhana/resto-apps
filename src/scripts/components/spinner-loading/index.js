class SpinnerLoading extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="row center">
          <span>
            Loading...
          </span>
        </div>`;
  }
}

customElements.define('spinner-loading', SpinnerLoading);
