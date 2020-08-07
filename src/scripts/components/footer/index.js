class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="darken white-text">
            <div class="footer-copyright">
                <div class="container">
                    © 2020 Copyright KharismaWardhana
                    <a class="white-text right" href="/">Foodies</a>
                </div>
            </div>
        </div>
          `;
  }
}

customElements.define('page-footer', Footer);
