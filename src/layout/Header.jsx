function Header() {
  return (
    <nav className="light-blue lighten-1">
      <div className="nav-wrapper">
        <a
          href="https://muteki-Ronin.github.io/react-shop-project"
          className="brand-logo"
        >
          Fortnite Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/muteki-Ronin/react-shop-project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
