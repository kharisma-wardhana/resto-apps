class HeroElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero white-text">
            <div class="container">
                <h1 class="display-3">Bonjour!</h1>
                <p>
                    Start your journey to explore hidden foods in every city.
                </p>
            </div>
        </div>
          `;
  }
}

customElements.define('hero-element', HeroElement);
