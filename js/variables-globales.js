var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["img/HTML5_logo.png", "img/CSS3_logo.png"],
  ["img/javascript-logo-png.png", "img/react-js-logo.png"],
  ["img/node-logo.png", "img/Csharp_Logo.png", "img/sql-server-1.png", "img/MySQL-logo.png"],
  ["img/photoshop-logo.png", "img/illustrator.png", "img/XD-Logo.png", "img/Redux.png"],
  ["img/photoshop-logo.png", "img/illustrator.png", "img/XD-Logo.png", "img/Redux.png"]
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];
