const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        // Instance Variables
        this.github = github;

        // Class Variables
        this.role = 'Engineer';
    };

    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;