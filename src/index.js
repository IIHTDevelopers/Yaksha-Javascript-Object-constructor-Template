// Object constructor function to create a person
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

// Creating instances of Person
const person1 = new Person("John", 30, "Developer");
const person2 = new Person("Alice", 25, "Designer");

// Storing persons in an object
const people = {
    person1: person1,
    person2: person2
};

// Looping through the object and logging the properties
for (let key in people) {
    if (people.hasOwnProperty(key)) {
        console.log(`${key}: Name = ${people[key].name}, Age = ${people[key].age}, Profession = ${people[key].profession}`);
    }
}
