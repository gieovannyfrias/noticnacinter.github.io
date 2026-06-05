const tendencias = [
  {
    titulo: "Estados Unidos acaba de desclasificar sobre fenómenos aéreos no identificados",
    descripcion: "(OVNIs/UAP).",
    img: "https://lh3.googleusercontent.com/d/1W2cvo6h5BN4SBvk5Y4qgsCwoCOfS0sge=w1000",
    link: "/Tendency_1",
    categoria: "Desconocido",
    fecha: "May 2026"
  },
  {
    titulo: "Periodistas e influencers son comprados por embajada de Estados Unidos.",
    descripcion: "Embajada compran periodistas para distorcionar, difamar la comunidad para desestabilizar el pais con información",
    img: "https://lh3.googleusercontent.com/d/1aEEGa2ZCaYGJfYNmHjkox16eX6wQjOpT=w1000",
    link: "/Tendency_2",
    categoria: "Periodismo",
    fecha: "May 2026"
  },
  {
      titulo: "Papa León XIV.",
    descripcion: "Papa vs IA",
    img: "https://lh3.googleusercontent.com/d/1X7uF0hG9-VCYVUOgRwnnDAD4Q--J9Cu3=w1000",
    link: "/Tendency_3",
    categoria: "Religion",
    fecha: "May 2026"
  },
    {
    titulo: "Visa y MasterCard bloquean a Cuba.",
    descripcion: "EE.UU da sanciones finanzas comerciales a cuba.",
    img: "https://lh3.googleusercontent.com/d/1vn_Xg7wTsk_s8wbhXckkgf-e7P3i76M4=w1000",
    link: "/Tendency_4",
    categoria: "Incendio",
    fecha: "Jun 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
  {
    titulo: "No disponible - Titulo",
    descripcion: "No disponible - Descripción",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "/No_disponible",
    categoria: "Negocios",
    fecha: "Ene 2026"
  }
];
/*tendencias*/
const tendenciasList = document.getElementById("tendencias-list");

tendencias.forEach(tendencia => {
  const card = document.createElement("div");
  card.classList.add("tendencia-card");
  card.innerHTML = `
    <a href="${tendencia.link}" target="_blank" rel="noopener noreferrer">
      <img src="${tendencia.img}" alt="${tendencia.titulo}">
      <h3>${tendencia.titulo}</h3>
      <p class="tendencia-desc">${tendencia.descripcion}</p>
      <p class="tendencia-meta">${tendencia.fecha} · ${tendencia.categoria}</p>
    </a>
  `;
  tendenciasList.appendChild(card);
});
const leftArrow = document.querySelector(".tendencias-arrow.left");
const rightArrow = document.querySelector(".tendencias-arrow.right");

leftArrow.addEventListener("click", () => {
  tendenciasList.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  tendenciasList.scrollBy({ left: 300, behavior: "smooth" });
});
