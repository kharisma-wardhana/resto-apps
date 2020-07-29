class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">
                <span class="app-title">Restorant Apps<span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav_item active"><a class="nav_link" href="#">Home</a></li>
                    <li class="nav_item"><a class="nav_link" href="#">Favorite</a></li>
                    <li class="nav_item"><a class="nav_link" href="#">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
