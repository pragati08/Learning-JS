//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code

//Implement your class here
class Person {
  name;
  age;
  gender;

  speak() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student {
  person;
  major;
  gpa;
  study() {
    console.log(` I am studying ${this.major} and my GPA is ${this.gpa}.`);
  }
  speak() {
    console.log(
      `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
    );
  }

  constructor(person, major, gpa) {
    this.person = person;
    this.major = major;
    this.gpa = gpa;
  }
}

const person1 = new Person("john", 20, "m");

person1.speak();

const stud1 = new Student(person1, "CS", 9);

stud1.speak();

stud1.study();
