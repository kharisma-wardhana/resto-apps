class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" role="navigation">
        <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                  <div class="app-brand">
                    <img src="./images/cook.png" alt="logo">
                    <span>Foodies</span>
                  </div>
              </a>
              <button class="navbar-toggler" id="toggleNav" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav_item active"><a class="nav_link" href="/">Home</a></li>
                    <li class="nav_item"><a class="nav_link" href="#/favorite">Favorite</a></li>
                    <li class="nav_item"><a class="nav_link" href="https://github.com/kharisma-wardhana">About Us</a></li>
                </ul>
            </div>
        </div>
      </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
