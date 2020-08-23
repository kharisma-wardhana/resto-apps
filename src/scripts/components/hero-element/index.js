class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="row">
          <div class="col hero white-text">
              <div class="container">
                  <h1 class="display-3">Bonjour!</h1>
                  <p>
                      Start your journey to explore hidden foods in every city.
                  </p>
              </div>
          </div>
        </div>
          `;
  }
}

customElements.define('hero-element', HeroElement);
