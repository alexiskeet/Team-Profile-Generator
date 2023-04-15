// from Employee.js
const Employee = require('./Employee');

// class oversees all functions in file
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    // getSchool()
    getSchool() {
        return this.school
    }
    // getRole() -- overridden to return 'Intern'
    getRole () {
        return 'Intern';
    }
}
// exporting :)
module.exports = Intern;

// school