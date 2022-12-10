class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <div class="header-container">
        <a class="logo noselect" href="/">
          <img class="logo__img" src="./img/icon.png" alt="logo" />
          <h2 class="logo__text">myWork</h2>
        </a>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item theme-toggle">
              <i class="theme-icon fa-regular fa-sun"></i>
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
