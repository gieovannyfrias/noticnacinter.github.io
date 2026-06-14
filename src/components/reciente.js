// reciente.js moderno 2026

// Array de noticias recientes
const recientes = [
  {
    titulo: "Respaldo de México con ex presidente AMLO y Relación con Estados Unidos con Donald Trump.",
    descripcion: "México vs EE.UU.",
    img: "https://lh3.googleusercontent.com/d/1k5x9I-bT8rm7kRGNvDLI47_pNlYeiBq_=w1000",
    link: "/Recent_1",
        categoria: "Politica",
            fecha: "Jun 2026"  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"
  },
   {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"  },
   {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"  },
   {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "detalle.html",
        categoria: "Virtual",
            fecha: "Ene 2026"  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
        categoria: "Virtual",
            fecha: "Ene 2026"  }
];

// Renderizar recientes
function renderRecientes() {
  const grid = document.getElementById("recientes-grid");
  if (!grid) return;

  recientes.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("news-card_4");
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
(function addRecientesCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
.recientes-wrapper {
  position: relative;
  width: 100%;
}

#recientes-grid {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;   /* ocultamos scroll manual */
  padding: 10px;
  scroll-behavior: smooth;
}

.news-card_4 {
  min-width: 250px;
  background: #1e1e2f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.news-card_4 a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 12px;
}

.news-card_4 img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.news-card_4 h3 {
  font-size: 1rem;
  margin: 0 0 6px 0;
background: linear-gradient(90deg, #ffffff, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.news-card_4:hover {
  transform: scale(1.05);
}

/* Flechas */
.recientes-arrow {
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

.recientes-arrow:hover {
  background: rgba(255,215,0,0.9);
  color: #2a2a3d;
}

.recientes-arrow.left {
  left: 10px;
}

.recientes-arrow.right {
  right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .news-card_4 {
    min-width: 200px;
  }
  .recientes-arrow {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
#recientes-grid {
overflow-x: auto;
}
}

@media (max-width: 480px) {
  .news-card_4 {
    min-width: 160px;
  }
  .recientes-arrow {
    display: block; /* en móvil solo scroll táctil */
  }
}
  `;
  document.head.appendChild(style);
})();

// Control de flechas
document.addEventListener("DOMContentLoaded", () => {
  renderRecientes();

  const recientesGrid = document.getElementById("recientes-grid");
  const leftBtn = document.querySelector(".recientes-arrow.left");
  const rightBtn = document.querySelector(".recientes-arrow.right");

  if (leftBtn && rightBtn && recientesGrid) {
    leftBtn.addEventListener("click", () => {
      recientesGrid.scrollBy({ left: -300, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      recientesGrid.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});
