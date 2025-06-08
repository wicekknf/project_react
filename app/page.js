import Image from "next/image";


export default function Home() {
  return (
    <>
      <nav>
        <div className="logo-nav">
          
        </div>
        <div className="nav-list">
          <a className="a-style" href="#">Home</a>
          <a className="a-style" href="#about-us">O nas</a>
          <a className="a-style" href="#offer">Oferta</a>
          
        </div>

        <div className="mini-nav">
          <div className="icon-box">
            <div className="hamburger-icon">
              <i className="ti ti-menu-2"></i>
            </div>
            <div className="close-icon">
              <i className="ti ti-x"></i>
            </div>
          </div>
          <div className="mini-nav-list">
            <a href="#">Home</a>
            <a href="#about-us">O nas</a>
            <a href="#offer">Oferta</a>
            
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-shadow"></div>
        <div className="hero-text">
          <p>Forest Group</p>
          <h1>Najpiękniejszy park w Twojej okolicy!</h1>
        </div>
      </div>

      <section id="about-us" className="about-us wrapper">
        <h2 className="section-title">o nas</h2>
        <div className="about-us-box">
          <div className="about-us-img">
            <img
              src="/img/waters-big.jpg"
            
              alt="Mała wysepka na środku jeziora. Wszędzie bujna roślinność a na wysepce jedno małe drzewko"
            />
          </div>
          <div className="about-us-text">
            <h3>Niezapomniane Przygody</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <a
                href="http://www.MMCSchool.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.MMCSchool.pl
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="hero2">
        <div className="hero2-shadow"></div>
        <div className="hero2-text">
          <p>Przygoda dla całej rodziny</p>
        </div>
      </div>

      <section id="offer" className="wrapper offer">
        <h2 className="section-title">oferta</h2>
        <p className="info">Wybierz jedną z naszych wspaniałych ofert!</p>
        <div className="cards">
          <div className="card one">
            <h3>Demo</h3>
            <p className="price">$0</p>
            <ul className="card-list">
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-minus"></i> opcja poza pakietem</li>
              <li><i className="ti ti-minus"></i> opcja poza pakietem</li>
              <li><i className="ti ti-minus"></i> opcja poza pakietem</li>
            </ul>
            <button className="chose">Wybierz</button>
          </div>

          <div className="card two">
            <h3>Standard</h3>
            <p className="price">$99</p>
            <ul className="card-list">
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-minus"></i> opcja poza pakietem</li>
              <li><i className="ti ti-minus"></i> opcja poza pakietem</li>
            </ul>
            <button className="chose standard-btn">Wybierz</button>
          </div>

          <div className="card three">
            <h3>Premium</h3>
            <p className="price">$299</p>
            <ul className="card-list">
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
              <li><i className="ti ti-check"></i> opcja w pakiecie</li>
            </ul>
            <button className="chose">Wybierz</button>
          </div>
        </div>

        <div className="card other">
          <h3>Wszyskie oferty</h3>
          <p className="price">Sprawdź nasze pozostałe oferty!</p>
          <button className="chose">
            <a href="offer.html">Sprawdź</a>
          </button>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-element">
              <i className="ti ti-christmas-tree"></i> Forest
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-info-boxes">
              <h3>O nas</h3>
              <a href="#">Historia</a>
              <a href="#">Parki</a>
              <a href="#">Opinie</a>
            </div>
            <div className="footer-info-boxes">
              <h3>Nasza firma</h3>
              <a href="#">Praca</a>
              <a href="#">Kadry</a>
              <a href="#">Zarząd</a>
            </div>
            <div className="footer-info-boxes">
              <h3>Dokumenty</h3>
              <a href="#">Wnioski</a>
              <a href="#">Rezerwacje</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;<span className="year"></span> Forest Group Company Ltd.</p>
        </div>
      </footer>
    </>
  );
}
