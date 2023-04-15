// from Employee.js
const Employee = require('./Employee');

// class oversees all functions in file
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    // getGitHub()
    getGitHub() {
        return this.github
    }
    // getRole() -- overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}
// exporting :)
module.exports = Engineer;

// github