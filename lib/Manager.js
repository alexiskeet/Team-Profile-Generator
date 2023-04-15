// from Employee.js
const Employee = require('./Employee');

// class oversees all functions in file
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    // officeNumber
    getOfficeNumber() {
        return this.officeNumber
    }
    // getRole() -- overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}
// exporting :)
module.exports = Manager
