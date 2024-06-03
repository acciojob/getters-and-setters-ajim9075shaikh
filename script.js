//complete this code
// Class definition for Person
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(newAge) {
        this._age = newAge;
    }

    // Getter for age to verify age change (optional, for testing purposes)
    get age() {
        return this._age;
    }
}

// Subclass definition for Student
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Subclass definition for Teacher
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}



window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
