import {Student, LearningPaths} from './classes.mjs'

// --------- Functions ---------

function crearUsuario(nuevoEmail, nuevaPassword) {
  nuevo = new Student({
    email: nuevoEmail,
    password: nuevaPassword,
  });
  console.log(nuevo);
  listaUsuarios.push(nuevo);
}

// --------- Distintas Escuelas ---------

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web", 
  courses: ["Curso de Programación Básica",
  "Curso Definitivo de HTML y CSS",
  "Curso Práctico de HTML y CSS"  
]})

const escuelaData = new LearningPaths ({
  name: "Escuela de Data Science",
  cursos: ['Curso de Introducción a la Data Science',
  'Curso de Matemáticas aplicada',
  'Curso de Tableau',
  ],
})

const escuelaVjs = new LearningPaths ({
  name: "Escuela de Videojuegos",
  cursos: ['Curso introduccion a la Creación de Videojuegos',
  'Curso de Unreal Engine',
  'Curso de Programación con Unity',
  ],
})

const luciano = new Student({
  first: "Luciano",
  last: "Cavallo",
  password: "hola567",
  email: "lucianocavallo@gmail.com",
  age: 33,
  facebook: "Luchx88",
  instagram: "@luchin",
  twitter: "@luchin",
  rutasAprendizaje: {
    escuelaWeb,
    escuelaVjs,  
  },
})

console.log(luciano)

const adolfo = new Student ({
  first: 'Adolfo',
  last: 'Cavallo',
  age: 65,
  password: "hola567",
  email: 'adolforcavallo@gmail.com',
  facebook: 'Adolfo Cavallo',
  instagram: '@adolfo_cavallo',
  twitter: '@adolfo_cavallo',
  rutasAprendizaje: [
    escuelaWeb,
    escuelaData,
  ],
})

const micaela = new Student ({
  first: 'Micaela',
  last: 'Bustamante',
  email: 'mica.bustamante@gmail.com',
  password: 'hola567',
  facebook: 'Mica Bustamante',
  instagram: '@mica_',
  twitter: '@mica_',
  rutasAprendizaje: [
    escuelaData,
    escuelaVjs,
  ],
})

// --------- Lista de Usuarios ---------

let listaUsuarios = []; 
listaUsuarios.push(luciano);
listaUsuarios.push(adolfo);
listaUsuarios.push(micaela);


const listaEmail = listaUsuarios.map((elemento) => {
  return elemento.email
});

const listaPass = listaUsuarios.map((elemento) => {
  return elemento.password
});

// --------- Boton Login ---------

const login = document.getElementById("login-button");
login.onclick = () => {
  const email = document.getElementById('email-button');
  let emailValue = email.value;
  const pass = document.getElementById("password-button");
  let password = pass.value;

  const result = document.getElementById("result");

  debugger
  if (emailValue == listaEmail[0] && password == listaPass[0]) {
    console.log(luciano);
    result.innerHTML = `Hola <strong>${listaUsuarios[0]._name}</strong>, <br />
    has iniciado sesión <br />
    email: ${listaUsuarios[0].email} <br />
    contraseña sarasa: \"${listaUsuarios[0].password}\"`
  }else if (emailValue == listaEmail[1] && password == listaPass[1]){
    result.innerHTML = `Hola <strong>${listaUsuarios[1]._name}</strong>, <br />has iniciado sesión <br />
    email: ${listaUsuarios[1].email} <br />
    contraseña sarasa: \"${listaUsuarios[1].password}\"`;
  } else if (emailValue == listaEmail[2] && password == listaPass[2]){
    result.innerHTML = `hola <strong>${listaUsuarios[2]._name}</strong>, <br />has iniciado sesión<br />
    email: ${listaUsuarios[2].email}<br />
    contraseña sarasa: ${listaUsuarios[2].password}`
  } else {
    alert('')
  }
  result.setAttribute('style', 'margin: 0 0 80px 0;')
}

// --------- Boton Registrarse ---------

const register = document.getElementById('register-button');
register.onclick = () => {
  const email = document.getElementById('email-button');
  let emailValue = email.value;
  const pass = document.getElementById("password-button");
  let password = pass.value;
  const result = document.getElementById("result");
  if (emailValue !== false && password == false) {
    result.insertAdjacentHTML(`Genial, te has registrado en Platzi! <br />
    tu email es ${emailValue} y tu contraseña ${password}`);
    crearUsuario(emailValue, password);
    return nuevoUsuario;
  } 
}

