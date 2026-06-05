// recomendado.js moderno 2026

// Array de recomendados
const recomendados = [
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "No_disponible.html",
    fecha: "22 Ene 2026"
  }
];

// Renderizar recomendados
function renderRecomendados() {
  const grid = document.getElementById("recomendado-grid");
  if (!grid) return;

  recomendados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card_1");
    card.innerHTML = `
      <a href="${item.link}" class="latest-main_1">
        <img class="img_1" src="${item.img}" alt="${item.titulo}">
        <div class="contenido_1">
          <h3>${item.titulo}</h3>
          <p>${item.descripcion}</p>
          <span class="fecha_1">${item.fecha}</span>
        </div>
      </a>
    `;
    grid.appendChild(card);
  });
}

// Inyectar CSS dinámicamente
(function addRecomendadoCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
.recomendado-wrapper {
  position: relative;
  width: 100%;
}

#recomendado-grid {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;   /* ocultamos scroll manual */
  padding: 10px;
  scroll-behavior: smooth;
}

.card_1 {
  min-width: 250px;
  background: ;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.card_1:hover {
  transform: scale(1.05);
}

.img_1 {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.contenido_1 h3 {
  font-size: 1rem;
  margin: 0 0 6px 0;
background: linear-gradient(90deg, #ffffff, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fecha_1 {
  font-size: 0.85rem;
  color: #aaa;
}

/* Flechas */
.recomendado-arrow {
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

.recomendado-arrow:hover {
  background: rgba(255,215,0,0.9);
  color: #2a2a3d;
}

.recomendado-arrow.left {
  left: 10px;
}

.recomendado-arrow.right {
  right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .card_1 {
    min-width: 200px;
  }
  .recomendado-arrow {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .card_1 {
    min-width: 160px;
  }
  .recomendado-arrow {
    display: block; /* en móvil solo scroll táctil */
  }
}
  `;
  document.head.appendChild(style);
})();

// Control de flechas
document.addEventListener("DOMContentLoaded", () => {
  renderRecomendados();

  const recomendadoGrid = document.getElementById("recomendado-grid");
  const leftBtn = document.querySelector(".recomendado-arrow.left");
  const rightBtn = document.querySelector(".recomendado-arrow.right");

  if (leftBtn && rightBtn && recomendadoGrid) {
    leftBtn.addEventListener("click", () => {
      recomendadoGrid.scrollBy({ left: -300, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      recomendadoGrid.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});
