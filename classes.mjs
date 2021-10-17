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

class LearningPaths {
  constructor({
    name, 
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

