// --------- Functions ---------

function crearUsuario(nuevoEmail, nuevaPassword) {
  nuevo = new Student({
    email: nuevoEmail,
    password: nuevaPassword,
  });
  console.log(nuevo);
  listaUsuarios.push(nuevo);
}

// --------- Clases ---------

class LearningPaths {
  constructor({
    name, 
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}


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

class Student {
  constructor({
    first,
    last,
    password,
    age,
    email,
    facebook,
    instagram,
    twitter,
    rutasAprendizaje = {},
  }) {
    this._name = `${first} ${last}`
    this.password = password,
    this.age = age;
    this.email = email;
    this.socialMedia = {
      twitter,
      facebook,
      instagram
    };
    this.rutasAprendizaje = rutasAprendizaje;
  }

  get name() {
    console.log(this._name)
  }
  set name(a) {
    this._name = a;
  }
}

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

const adolfo = new Student ({
  first: 'Adolfo',
  last: 'Cavallo',
  age: 65,
  password: "lalala987",
  email: 'adolforcavallo@gmail.com',
  facebook: 'Adolfo Cavallo',
  instagram: '@adolfo_cavallo',
  twitter: '@adolfo_cavallo',
  rutasAprendizaje: [
    escuelaWeb,
    escuelaData,
  ],
})
// --------- Lista de Usuarios ---------

let listaUsuarios = []; 

// --------- Boton Login ---------

const listaEmail = [luciano.email, adolfo.email];
const listaPass = [luciano.password, adolfo.password];

const login = document.getElementById("login-button");
login.onclick = () => {
  const email = document.getElementById('email-button');
  let emailValue = email.value;
  const pass = document.getElementById("password-button");
  let password = pass.value;

  const result = document.getElementById("result");

  
  if (emailValue == listaEmail[0] && password == listaPass[0]) {
    console.log(luciano);
    result.insertAdjacentHTML('afterbegin', `Hola <strong>${luciano._name}</strong>,<br /> has iniciado sesión en Platzi <br />
    email: ${luciano.email} <br />
    contraseña sarasa: ${luciano.password}`);
  }else if (emailValue == listaEmail[1] && password == listaPass[1]){
    result.innerHTML = `Hola <strong>${adolfo._name}</strong>, <br />has iniciado sesión <br />
    email: ${adolfo.email} <br />
    contraseña sarasa: \"${adolfo.password}\"`;
  } else {
    console.log("Email o contraseña Incorrectos")
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

