class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="bg-dark white-text">
            <div class="footer-copyright container">
                    © 2020 Copyright KharismaWardhana
                    <a class="white-text" href="/">Foodies</a>
            </div>
        </div>
          `;
  }
}

customElements.define('page-footer', Footer);
