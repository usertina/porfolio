const modoBtn = document.getElementById('modo-btn');
const contenido = document.getElementById('contenido');

let modoOscuro = false;

modoBtn.addEventListener('click', () => {
  modoOscuro = !modoOscuro;
  actualizarModo();
});

function actualizarModo() {
  if (modoOscuro) {
    document.body.style.background = 'linear-gradient(to right, #43C197, #666)';
    document.body.style.color = '#f0f0f0';
  } else {
    document.body.style.background = 'linear-gradient(to right, #FCEF81, #dddddd)';
    document.body.style.color = '#333';
  }
}

// Ejemplo de llamada a la función para establecer el modo oscuro
actualizarModo();

// Ejemplo de llamada a la función para establecer el modo claro
modoOscuro = false;
actualizarModo();

function mostrarAcercaDe() {
  contenido.innerHTML = "<h2>Acerca de Mi</h2>" +
                         "<p>Profesional vocacional del sector Web Developer con formación en la materia y conocimientos de CSS, HTML5, VUE, GIT, JavaScript, Github, MySQL, FIGMA, TRELLO... Gracias a mi experiencia profesional en diversos sectores he desarrollado competencias clave como pensamiento analítico, control de la frustración, escucha activa y paciencia, algo fundamental a la hora de trabajar con equipos y clientes. A su vez, tengo buena capacidad para organizar y gestionar el trabajo y me amoldo fácilmente a los cambios.</p>" +
                         "<p><svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 384 512'><path fill='#ff7800' d='M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z'/></svg></p>" +
                         "<svg viewBox='0 0 32 32' width='40' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M6 28L4 3H28L26 28L16 31L6 28Z' fill='#1172B8'></path><path d='M26 5H16V29.5L24 27L26 5Z' fill='#33AADD'></path><path d='M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z' fill='white'></path></g></svg>" +
                         "<svg width='40px' height='40px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><rect id='Icons' x='-512' y='-128' width='1280' height='800' style='fill:none;'></rect><g id='Icons1' serif:id='Icons'></g><g id='vue'><path d='M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z' style='fill:#435466;'></path><path d='M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z' style='fill:#4dba87;'></path></g></g></svg>" +
                         "<svg xmlns='http://www.w3.org/2000/svg' aria-label='JavaScript' role='img' viewBox='0 0 512 512' width='40px' height='40px' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><rect width='512' height='512' rx='15%' fill='#f7df1e'></rect><path d='M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z'></path></g></svg>" +
                         "<svg fill='#FFD700' width='40px' height='40px' viewBox='0 0 24 24' role='img' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><title>MySQL icon</title><path d='M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z'></path><path d='M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z'></path><path d='M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z'></path><path d='M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z'></path><path d='M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z'></path></g></svg>" +
                         "<svg xmlns='http://www.w3.org/2000/svg' aria-label='Trello' role='img' viewBox='0 0 512 512' fill='#000000' width='40px' height='40px'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><rect width='512' height='512' rx='15%' fill='#0079bf'></rect><rect height='188' rx='23' width='132' x='284' y='95'></rect><rect height='296' rx='23' width='132' x='97' y='95'></rect></g></svg>";

}


function mostrarProyectos() {
  contenido.innerHTML = "<h2>Mis Proyectos</h2>"+
                         "<p>MARIFARMA(Proyecto de una tienda)</p><a href='https://github.com/usertina/Marifarma'>"+
                         "<img src='img_marifarma/carro.png' alt='Carro'width='200' height='200'>"+
                         "<img src='img_marifarma/checkout.png' alt='Carro'width='200' height='200'>"+
                         "<img src='img_marifarma/paracoders1.png' alt='Carro'width='200' height='200'><br>"+
                         "<p>MANGAPOWER(un juego tipo battle royal)</p><a href='https://github.com/usertina/MangaPower'>"+
                         "<img src='img_manga/Captura de pantalla de 2024-04-23 11-37-10.png'width='200' height='200'>"+
                         "<img src='img_manga/Captura de pantalla de 2024-04-23 11-38-37.png'width='200' height='200'>"+
                         "<img src='img_manga/personalFile.png'width='200' height='200'><br>"+
                         "<p>BASAURI_BALONCESTO(proyecto de una web de un equipo de baloncesto)</p><a href='https://github.com/usertina/Basauri_baloncesto"+
                         "<img src='img_baloncesto/contacto.png'width='200' height='200'>"+
                         "<img src='img_baloncesto/entradas.png'width='200' height='200'>"+
                         "<img src='img_baloncesto/plantilla.png'width='200' height='200'>";
}



function mostrarContacto() {
  contenido.innerHTML = "<h2>Contacto</h2><p><a href='https://www.linkedin.com/in/tina-calleja'><svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 448 512'><path fill='#74C0FC' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'/></svg></a></p><a href='mailto:agustinacalleja@gmail.com'><svg xmlns='http://www.w3.org/2000/svg'width='40' height='40' viewBox='0 0 512 512'><path fill='#63E6BE' d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'/></svg></a>";
}

