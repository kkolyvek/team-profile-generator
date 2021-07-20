const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        // Instance Variables
        this.officeNumber = officeNumber;

        // Class Variables
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;