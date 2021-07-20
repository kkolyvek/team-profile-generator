const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        // Instance Variables
        this.school = school;

        // Class Variables
        this.role = 'Intern';
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;