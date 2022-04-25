function muestraMenu(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    document.querySelector(".pmenu-nav").classList.toggle("visible");
  }

  function ocultaMenu(evento) {
    evento.preventDefault();
    document.querySelector(".pmenu-nav").classList.remove("visible");
  }



  document.querySelector("#pmostrar-menu").addEventListener("click", muestraMenu);
  document.querySelector("#pcerrar-menu").addEventListener("click", ocultaMenu);