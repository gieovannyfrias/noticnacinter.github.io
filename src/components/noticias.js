// ultimas noticias.js moderno 2026

// Array de noticias compartido
const noticias = [
      {
    titulo: "El Estadio Banorte cambia su nombre a Estadio Ciudad de México por segunda vez.",
    descripcion: "Decisión del FIFA que no debe de tener nombre de marca comerciales.",
    img: "https://lh3.googleusercontent.com/d/1roP2yce8osv4TsaPiSGGyjTjAvgghPeP=w1000",
    fecha: "15 May 2026",
    categoria: "Deportes",
    link: "Post_9.html"
  },
    {
    titulo: "México, Estados Unidos, Canada - FIFA 2026",
    descripcion: "Partido mundial de america.",
    img: "https://lh3.googleusercontent.com/d/1DAqWO_vmoibF3hwyxeHcMHmtdcmxApI6=w1000",
    fecha: "15 May 2026",
    categoria: "Deportes",
    link: "Post_8.html"
  },
    {
    titulo: "No dejes a los niños solos.",
    descripcion: "Pelicula mexicana.",
    img: "https://lh3.googleusercontent.com/d/1bsBAVO6iJY3swu0JkW__rdoazrwdOWLh=w1000",
    fecha: "14 May 2026",
    categoria: "Peliculas",
    link: "Post_7.html"
  },
    {
    titulo: "Gmail le dice adios a los 15 gb de almacenamiento gratis al no registrar tu numero telefonico sera 5 gb.",
    descripcion: "Google gmail acaba de modificar su almacenamiento al registrar una nueva cuenta.",
    img: "https://lh3.googleusercontent.com/d/1xjmb87cuA-xYImzuFlmLGGHw9P2NqUrk=w1000",
    fecha: "14 May 2026",
    categoria: "Tecnologia",
    link: "Post_6.html"
  },
  {
    titulo: "Whatsapp lanza el modo incognito.",
    descripcion: "Meta IA",
    img: "https://lh3.googleusercontent.com/d/1Iu8xz8bpfqu1gLrrt7EHV69DxDevdCgm=w1000",
    fecha: "13 May 2026",
    categoria: "Tecnologia",
    link: "Post_5.html"
  },
  {
    titulo: "El peso mexicano se estable en $17.25 por dólar en México.",
    descripcion: "Economia financiera del dolar.",
    img: "https://lh3.googleusercontent.com/d/1J7O0Hs3Y_i8bdSLQ3qqEw1L8ht9EoWjm=w1000",
    fecha: "12 May 2026",
    categoria: "Economia",
    link: "Post_4.html"
  },
  {
    titulo: "Refinería Antonio Dovalí Jaime de Petróleos Mexicanos se incendia.",
    descripcion: "Pemex",
    img: "https://lh3.googleusercontent.com/d/1_5RkrbYFvIXTPjHjtHGFmVX6ckYNBvIk=w1000",
    fecha: "11 May 2026",
    categoria: "Tecnologia",
    link: "Post_3.html"
  },
  {
    titulo: "¿Donde se encuentra el hantavirus?",
    descripcion: "Precaución con roedores.",
    img: "https://lh3.googleusercontent.com/d/1uydFoK-jOeMNVJOfQoeBOgJZ5ilzAXqm=w1000",
    fecha: "7 May 2026",
    categoria: "Salud",
    link: "Post_2.html"
  },
  {
    titulo: "La CDMX este fin de semana: alerta amarilla por calor de 32 °C.",
    descripcion: "El intenso calor y la posibilidad de tormentas dispersas en todas las alcaldia en este fin de semana.",
    img: "https://media.istockphoto.com/id/1132330190/es/foto/plaza-del-z%C3%B3calo-y-catedral-de-la-ciudad-de-m%C3%A9xico-ciudad-de-m%C3%A9xico-m%C3%A9xico.jpg?b=1&s=612x612&w=0&k=20&c=pl4eSp6h7fRAqo5NaxevyYcNw1uTJSGr8npGo8IZT3k=",
    fecha: "1 May 2026",
    categoria: "Medio ambiente",
    link: "Post_1.html"
  }
];

// Función para renderizar noticias en cualquier contenedor
function renderNoticias(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  noticias.forEach(noticia => {
    const card = document.createElement("article");
    card.classList.add("news-card");
    card.innerHTML = `
      <a href="${noticia.link}">
        <img src="${noticia.img}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p class="news-desc">${noticia.descripcion}</p>
        <p class="news-meta">${noticia.fecha} · ${noticia.categoria}</p>
      </a>
    `;
    contenedor.appendChild(card);
  });
}

// Inyectar CSS dinámicamente (horizontal pasarela)
(function addNoticiasCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
 .carousel-wrapper {
  position: relative;
  width: 100%;
}

#news-carousel {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;   /* ocultamos scroll manual */
  padding: 10px;
  scroll-behavior: smooth;
}

.news-card {
  min-width: 250px;
  background: #1e1e2f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.news-card a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 12px;
}

.news-card img {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.news-card h3 {
  font-size: 1rem;
  margin: 0 0 6px 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}

.news-desc {
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 8px;
}

.news-meta {
  font-size: 0.85rem;
  color: #aaa;
}

.news-card:hover {
  transform: scale(1.05);
  color: #000;
}

/* Flechas */
.carousel-arrow {
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

.carousel-arrow:hover {
  background: rgba(255,215,0,0.9);
  color: #2a2a3d;
}

.carousel-arrow.left {
  left: 10px;
}

.carousel-arrow.right {
  right: 10px;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .carousel-arrow {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {

  .carousel-arrow {
    display: block; /* en móvil solo scroll táctil */
  }
}

  `;
  document.head.appendChild(style);
})();
  const newsCarousel = document.getElementById("news-carousel");

  // Recorremos el arreglo de noticias (de noticias.js)
  noticias.forEach(noticia => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <a href="${noticia.link}" target="_blank" rel="noopener noreferrer">
        <img src="${noticia.img}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p class="news-desc">${noticia.descripcion}</p>
        <p class="news-meta">${noticia.fecha} · ${noticia.categoria}</p>
      </a>
    `;
    newsCarousel.appendChild(card);
  });
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("news-carousel");
  const leftBtn = document.querySelector(".carousel-arrow.left");
  const rightBtn = document.querySelector(".carousel-arrow.right");

  if (carousel && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});



