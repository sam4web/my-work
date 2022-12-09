class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <div class="header-container">
        <a class="logo noselect" href="/">
          <img class="logo__img" src="./img/logo-dark.png" alt="logo" />
          <h2 class="logo__text">myWork</h2>
        </a>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item theme-toggle">
              <i class="theme-icon fa-regular fa-sun"></i>
            </li>
            <li class="nav__list-item search-container">
              <input type="text" class="search-box" />
              <i class="search-toggle fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ``;
  }
}

customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
