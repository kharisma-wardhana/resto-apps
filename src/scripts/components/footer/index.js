class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="bg-dark white-text">
            <div class="footer-copyright row">
                    © 2020 Copyright KharismaWardhana
                    <a class="white-text" href="/">Foodies</a>
            </div>
        </div>
          `;
  }
}

customElements.define('page-footer', Footer);
