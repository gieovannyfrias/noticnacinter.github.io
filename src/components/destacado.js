// destacado.js moderno 2026

// Array de destacados
const destacados = [
  {
    titulo: "⚡ Reforma electoral aprobada",
    descripcion: "El Congreso aprueba una nueva reforma tras intenso debate parlamentario.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
        fecha: "Ene 2026"
  },
  {
    titulo: "🌍 Economíada un giro mundial",
    descripcion: "El peso mexicano se fortalece frente al dólar en los mercados internacionales.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"
  },
  {
    titulo: "🏆 Deportes la seleccion",
    descripcion: "La selección nacional logra una clasificación histórica en el torneo.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"
  },
  {
    titulo: "💡 Tecnología en china mundial",
    descripcion: "Avance en inteligencia artificial revoluciona la industria global.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"
  },
  {
    titulo: "🌱 Medio ambiente esta colapsando",
    descripcion: "Se anuncia un plan global contra el cambio climático.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"
  }
];

// Renderizar destacados
function renderDestacados() {
  const grid = document.getElementById("destacados-grid");
  if (!grid) return;

  destacados.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("news-card_3");
    card.innerHTML = `
      <a href="${item.link}" class="latest-main_1">
        <img src="${item.img}" alt="${item.titulo}">
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
        <p class="news-meta">${item.fecha} · ${item.categoria}</p>
      </a>
    `;
    grid.appendChild(card);
  });
}

// Inyectar CSS dinámicamente
(function addDestacadosCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
.destacados-wrapper {
  position: relative;
  width: 100%;
}

#destacados-grid {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;   /* ocultamos scroll manual */
  padding: 10px;
  scroll-behavior: smooth;
}

.news-card_3 {
  min-width: 250px;
  background: #1e1e2f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.news-card_3 a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 12px;
}

.news-card_3 img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.news-card_3 h3 {
  font-size: 1rem;
  margin: 0 0 6px 0;
  background: linear-gradient(90deg, #ff1e1e, #ffd700, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.news-card_3:hover {
  transform: scale(1.05);
}

/* Flechas */
.destacados-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(42,42,61,0.8);
  color: #ffd700;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: background 0.3s ease;
  z-index: 10;
}

.destacados-arrow:hover {
  background: rgba(255,215,0,0.9);
  color: #2a2a3d;
}

.destacados-arrow.left {
  left: 10px;
}

.destacados-arrow.right {
  right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .news-card_3 {
    min-width: 200px;
  }
  .destacados-arrow {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .news-card_3 {
    min-width: 160px;
  }
  .destacados-arrow {
    display: block; /* en móvil solo scroll táctil */
  }
}
  `;
  document.head.appendChild(style);
})();

// Control de flechas
document.addEventListener("DOMContentLoaded", () => {
  renderDestacados();

  const destacadosGrid = document.getElementById("destacados-grid");
  const leftBtn = document.querySelector(".destacados-arrow.left");
  const rightBtn = document.querySelector(".destacados-arrow.right");

  if (leftBtn && rightBtn && destacadosGrid) {
    leftBtn.addEventListener("click", () => {
      destacadosGrid.scrollBy({ left: -300, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      destacadosGrid.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});
