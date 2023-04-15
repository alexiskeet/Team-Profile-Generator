// class oversees all functions in file
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName()
    getName() {
        return this.name
    }
    // getId()
    getId() {
        return this.id
    }
    // getEmail()
    getEmail() {
        return this.email
    }
    // getRole() -- returns 'Employee'
    getRole() {
        return 'Employee';
    }

}
// export
module.exports = Employee;


//Other three classes with extend from employee
// Properties:
// name
// id
// email

