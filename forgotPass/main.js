function mensajeProgresivo1() {
  
  setTimeout(() => {
    mensajeProg.innerHTML = 'Puede que haya una solución...'

  }, 2000)
  
  setTimeout(() => {
    mensajeProg.innerHTML = '<img src=\'./img/terry-crews-laugh.gif\'>';
  }, 4000) 

  setTimeout(() => {
    mensajeProg.innerHTML = 'No, enserio, puede que la haya...';
  }, 7000)

  setTimeout(() => {
    mensajeProg.innerHTML = 'Tal vez si...';
  }, 9000)

  setTimeout(() => {
    mensajeProg.innerHTML = '<img src=\'./img/laughing-everybody-hates-chris.gif\'>';
  }, 11000)
  
  setTimeout(() => {
    mensajeProg.insertAdjacentHTML('beforeend', '<p>Nada que hacer, <br />es una página de prueba <br />nada más</p>');
  }, 13000)

  setTimeout(() => {
    mensajeProg.insertAdjacentHTML('beforeend', '😁🤣😁');
  }, 15000)
}

const mensajeProg = document.getElementById('mensaje')


mensajeProgresivo1();