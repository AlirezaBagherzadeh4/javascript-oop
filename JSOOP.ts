//OOP advantages:
//1- Encapsulation: hides the complexity of the code
//2- reusability

//Concepts:
//1- this: refers to the window (it's global) (don't refers to the value of a function, but refers to the values of an object):
function fullName() {
  let name: string = "Foo";
  console.log(this?.name); //undefined
}
const computer = {
  ram: 12,
  func: function () {
    return this.prop;
  },
};
console.log(computer.func()); // Expected output: 42

//Class scopes: (variables and functions)
//1- public: Public scopes are accessible from anywhere. By default, all properties and methods in a JavaScript class are public.
class Movie {
  title: string; // public by default
  director: string; // public by default
  constructor(title: string, director: string) {
    this.title = title;
    this.director = director;
  }
  getDetails() {
    return `${this.title} by ${this.director}`;
  }
}

const elephantMan = new Movie("elephantMan", "David Lynch");
console.log(elephantMan.title); // Accessible
console.log(elephantMan.getDetails()); // Accessible
//2- private: private members are only accessible within the class they are defined in. They are not accessible from outside the class.
//syntax: Prefix the scope with #.
class Movie2 {
  #title: string;
  #director: string;
  constructor(title: string, director: string) {
    this.#title = title;
    this.#director = director;
  }
  // only will be accessible through public method
  #getDetails() {
    return `${this.#title} by ${this.#director}`;
  }
  showDetails() {
    return this.#getDetails();
  }
}

const elephantMan2 = new Movie("elephantMan", "David Lynch");
console.log(elephantMan.title); // Undefined
console.log(elephantMan.getDetails()); // Undefined
//3- protected: Protected scope are accessible within the class and its subclasses.
//syntax: Prefix the scope with _.
class Movie3 {
  _title: string;
  _director: string;
  constructor(title: string, director: string) {
    this._title = title;
    this._director = director;
  }
  // only will be accessible through public method
  #getDetails() {
    return `${this._title} by ${this._director}`;
  }
  showDetails() {
    return this.#getDetails();
  }
}

//Static methods: we can access them without creating creating an instance of the class, instead we will get an error!

//Class: defines properties and methods that the objects created from the class can use
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

//Objects: objects are instances of classes
const dog = new Animal("Dog");
dog.speak(); //"Dog makes a sound"

//Inheritance: classes can inherit properties and methods from other classes
class Dog extends Animal {
  constructor(name: string) {
    //the parameters of the parent class should included in the child class
    super(name); // For inherit the parameters of the parent class
  }

  speak(): void {
    console.log(`${this.name} barks`);
  }
}
const dogFromDogClass = new Dog("Miloo");
dogFromDogClass?.speak(); //"Miloo barks"

//getter and setter:
class Human {
  protected _name: string = "";
  protected _lastName: string = " ";
  get name() {
    return this?._name;
  }
  set name(value) {
    this._name = value;
  }
  get lastName() {
    return this?._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get fullName() {
    return this?._name + " " + this?._lastName;
  }
}
const me = new Human();
me.name = "Foo";
me.lastName = "Bar";
console.log(me.fullName);

//an example
class Book {
  name: string;
  author: string;
  publisher: string;
  id: number;

  constructor(name: string, author: string, publisher: string, id: number) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.id = id;
  }

  public findBook(id: number, books: Book[]) {
    return books?.find((item: Book) => {
      item?.id === id;
    });
  }
}

const Hamlet = new Book("Hamlet", "Shakespeare", "Simon & Schuster", 215);
const PrideAndPrejudice = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  "Penguin Classics",
  279
);
const MobyDick = new Book(
  "Moby Dick",
  "Herman Melville",
  "Harper & Brothers",
  635
);
const TheGreatGatsby = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Scribner",
  180
);
const WarAndPeace = new Book("War and Peace", "Leo Tolstoy", "Vintage", 1225);
const booksArchive: Book[] = [
  Hamlet,
  PrideAndPrejudice,
  MobyDick,
  TheGreatGatsby,
  WarAndPeace,
];

Hamlet?.findBook(215, booksArchive); //will return Hamlet
