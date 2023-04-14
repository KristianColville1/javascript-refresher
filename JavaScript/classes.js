/**
 * JavaScript Classes.
 *
 * Classes are blueprints for JavaScript Objects.
 * They help you organize your objects for object-orientated
 * programming.
 *
 * For example, in the React framework you can use these
 * to build components if you wish.
 * 
 * Below examples written in ES6. Shorter hand version 
 * available for ES7 if reader interested in checking that out.
 */

class Human {
    constructor() {
        // example of constructor
        this.gender = "male"; // example of this being used
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    // example of extending base class Human
    constructor() {
        super(); // Needed for when calling the base constructor properties
        this.name = "Kristian"; // example of class properties
        this.age = 25;
        this.occupation = "Full Stack Software Engineer";
    }

    printName() {
        // example of a method
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }

    printOccupation() {
        console.log(this.occupation);
    }

    /**
     *
     * @param {*} interest prints user interest to the console
     */
    printUserInterest(interest) {
        console.log(`${this.name} likes ${interest}`);
    }
}

const person = new Person();
person.printGender();
person.printName();
person.printAge();
person.printOccupation();
person.printUserInterest("coding!"); // example of description added to methods/functions
