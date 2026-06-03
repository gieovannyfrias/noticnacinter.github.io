// header.js moderno 2026

// Renderizar Header dinámicamente
function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("main-header");
  header.innerHTML = `
  <div class="top-bar"> <span>📞 (+52)55-51-57-01-60  | ✉️ noticias@gieovannyfrias.com</span> </div>
    <nav class="navbar">
      <h1 class="logo">Noticnacinter</h1>
      <!-- Botón hamburguesa -->
      <div class="hamburger" id="hamburger">☰</div>
      <ul class="nav-links" id="nav-links">
        <li><a href="https://noticias.gieovannyfrias.com">Home</a></li>
        <li><a href="/Acerca_de">Acerca de</a></li>
        <li><a href="/index#destacados">Destacados</a></li>
        <li><a href="/index#tendencias">Tendencias</a></li>
        <li><a href="/index#reciente">Reciente</a></li>
        <li><a href="/index#nacional">Nacional</a></li>
        <li><a href="/index#internacional">Internacional</a></li>
        <li><a href="/index#ultimas">Últimas Noticias</a></li>
        <li><a href="/index#contacto">Contacto</a></li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
}

// Inyectar CSS dinámicamente
(function addHeaderCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
   .top-bar {
  background: #111;
  color: #fff;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
     position: relative;
}

.top-bar a {
  color: #ffd700;
  margin-left: 10px;
  text-decoration: none;
}
@media (max-width: 768px) {
  .top-bar {
display:none;
text-align: center;
    font-size: 0.8rem;
  }

   }
.main-header {
  width: 100%;
  background: #1e1e2f;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.navbar {
//  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  position: relative;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  text-shadow: 0 0 8px rgba(0,245,255,0.6),
               0 0 16px rgba(255,30,30,0.6),
               0 0 24px rgba(255,215,0,0.6);
}

/* Subrayado animado */
.logo::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00f5ff, #ff1e1e, #ffd700);
  animation: underlineMove 3s infinite linear;
}

@keyframes underlineMove {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #ffd700;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
}

/* Menú hamburguesa visible en móvil */
@media (max-width: 1000px) {
  .hamburger {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1100;
  }

  .nav-links {
    flex-direction: column;
    background: #1e1e2f;
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    padding: 40px 20px;
    transition: right 0.4s ease;
    z-index: 1000;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links li {
    margin: 20px 0;
  }

  .nav-links li a {
    font-size: 1.2rem;
    color: #fff;
  }
}
  `;
  document.head.appendChild(style);
})();

// Lógica del menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
      hamburger.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.textContent = "☰";
      });
    });
  }
});
