class Employee {
    constructor(name, id, email) {
        // Instance Variables
        this.name = name;
        this.id = id;
        this.email = email;

        // Class Variables
        this.role = 'Employee';
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    }
};

module.exports = Employee;