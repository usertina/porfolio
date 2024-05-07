document.addEventListener("DOMContentLoaded", function() {
  const animatedText = document.getElementById("animated-text");
  const text = animatedText.innerText;
  animatedText.innerText = ""; // Limpiar el texto original

  // Mostrar cada letra una por una
  for (let i = 0; i < text.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = text[i];
    letterSpan.style.animationDelay = `${i * 0.3}s`; // Ajusta el retraso de la animación aquí
    letterSpan.classList.add("show-letter");
    animatedText.appendChild(letterSpan);
  }
});

const modoBtn = document.getElementById('modo-btn');
const contenido = document.getElementById('contenido');
const videoContainer = document.getElementById('video-container');
const inicioBtn = document.getElementById('inicio-btn');

let modoOscuro = false;

modoBtn.addEventListener('click', () => {
  modoOscuro = !modoOscuro;
  actualizarModo();
  if (modoOscuro && modoOscuroActivo()) {
    mostrarVideoModoOscuro();
  } else {
    videoContainer.innerHTML = ''; // Limpiar el contenedor de video si se desactiva el modo oscuro
  }
});

function actualizarModo() {
  if (modoOscuro) {
    document.body.style.background = 'linear-gradient(to right, #43C197, #666)';
    document.body.style.color = '#f0f0f0';
    // Ajusta el color del texto de los iconos para modo oscuro
    const iconTexts = document.querySelectorAll('.icon-text');
    iconTexts.forEach(iconText => {
      iconText.style.color = '#333'; // Color del texto en modo oscuro
    });
  } else {
    document.body.style.background = 'linear-gradient(to right, #FF991C, #dddddd)';
    document.body.style.color = '#333';
    // Ajusta el color del texto de los iconos para modo claro
    const iconTexts = document.querySelectorAll('.icon-text');
    iconTexts.forEach(iconText => {
      iconText.style.color = '#333'; // Color del texto en modo claro
    });
  }
}

// Función para verificar si el modo oscuro está activado
function modoOscuroActivo() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}


// Ejemplo de llamada a la función para establecer el modo oscuro
actualizarModo();

// Ejemplo de llamada a la función para establecer el modo claro
modoOscuro = false;
actualizarModo();

// Agregar un event listener para el botón de inicio
inicioBtn.addEventListener('click', () => {
  reiniciarPagina();
});

// Función para reiniciar la página al estado inicial
function reiniciarPagina() {
  // Simplemente recargamos la página
  location.reload();
}

function mostrarAcercaDe() {
  contenido.innerHTML = "<h2>Acerca de Mi</h2>" +
                         "<p>Gracias a mi experiencia profesional en diversos sectores he desarrollado competencias clave como pensamiento analítico, control de la frustración, escucha activa y paciencia algo fundamental a la hora de trabajar con equipos y clientes. "+
                         "A su vez, tengo buena capacidad para organizar y gestionar el trabajo y me amoldo fácilmente a los cambios.</p>" +
                         "<div style='display:flex; flex-wrap: wrap; justify-content: center;'>"+
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/stickers/100/css3.png' width='60' height='60'/>" +
                         "<span class='icon-text'>CSS</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/color/48/html-5--v1.png' width='60' height='60'/>" +
                         "<span class='icon-text'>HTML</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/fluency/48/vuejs.png' width='60' height='60'/>" +
                         "<span class='icon-text'>Vue.js</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/color/48/javascript--v1.png' width='60' height='60'/>" +
                         "<span class='icon-text'>JavaScript</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/color/48/my-sql.png' width='60' height='60'/>" +
                         "<span class='icon-text'>MySQL</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/color/48/visual-studio-code-2019.png' width='60' height='60'/>" +
                         "<span class='icon-text'>Visual Studio Code</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/color/48/trello.png' width='60' height='60'/>" +
                         "<span class='icon-text'>Trello</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/cute-clipart/64/figma.png' width='60' height='60'/>" +
                         "<span class='icon-text'>Figma</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/nolan/64/canva.png' width='60' height='60'/>" +
                         "<span class='icon-text'>Canva</span>" +
                         "</div>" +
                         "<div style='text-align: center; margin: 5px; transition: transform 0.3s; position: relative;' onmouseover='showIconText(this)' onmouseout='hideIconText(this)'>" +
                         "<img src='https://img.icons8.com/plasticine/100/github.png' width='60' height='60'/>" +
                         "<span class='icon-text'>GitHub</span>" +
                         "</div>" +
                         "</div>";

  // Estilo para ocultar inicialmente los nombres de los iconos
  const style = document.createElement('style');
  style.innerHTML = ".icon-text { display: none; position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); background-color: white; padding: 5px; border-radius: 5px; }";
  document.head.appendChild(style);
}

// Función para mostrar el nombre del icono al pasar el cursor sobre él
function showIconText(element) {
  const iconText = element.querySelector('.icon-text');
  iconText.style.display = 'block';
}

// Función para ocultar el nombre del icono al quitar el cursor
function hideIconText(element) {
  const iconText = element.querySelector('.icon-text');
  iconText.style.display = 'none';
}

function mostrarProyectos() {
  contenido.innerHTML = "<h2>Mis Proyectos</h2>" +

    "<a href='https://marifarma.netlify.app'>" +
    "<img class='imagen' src='img_marifarma/1.png' width='250' height='250' title='Proyecto MARIFARMA'>" +
    "<img class='imagen' src='img_marifarma/2.png' width='250' height='250' title='Proyecto MARIFARMA'>" +
    "<img class='imagen' src='img_marifarma/3.png' width='250' height='250' title='Proyecto MARIFARMA'>" +

    "<a href='https://mangapower.netlify.app'>'>" +
    "<img class='imagen' src='img_manga/manga1.png' width='250' height='250' title='Proyecto MANGAPOWER'>" +
    "<img class='imagen' src='img_manga/manga2.png' width='250' height='250' title='Proyecto MANGAPOWER'>" +
    "<img class='imagen' src='img_manga/manga3.png' width='250' height='250' title='Proyecto MANGAPOWER'>" +

    "<a href='https://basauribasket.netlify.app'>" +
    "<img class='imagen' src='img_baloncesto/baloncesto1.png' width='250' height='250' title='Proyecto BASAURI BALONCESTO'>" +
    "<img class='imagen' src='img_baloncesto/baloncesto2.png' width='250' height='250' title='Proyecto BASAURI BALONCESTO'>" +
    "<img class='imagen' src='img_baloncesto/baloncesto3.png' width='250' height='250' title='Proyecto BASAURI BALONCESTO'>";
}

function mostrarContacto() {
  contenido.innerHTML = "<h2>Contacto</h2>" +
    "<p>" +
    "<a href='https://www.linkedin.com/in/tina-calleja' title='https://www.linkedin.com/in/tina-calleja'>" +
    "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 448 512'>" +
    "<path fill='#74C0FC' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'/>" +
    "</svg>" +
    "</a>" +
    "</p>" +
    "<a href='mailto:agustinacalleja@gmail.com' title='agustinacalleja@gmail.com'>" +
    "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 512 512'>" +
    "<path fill='#63E6BE' d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'/>" +
    "</svg>" +
    "</a>";
}

