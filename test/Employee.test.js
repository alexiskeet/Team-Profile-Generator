// require employee file
const Employee = require('../lib/Employee');

// use jest to run tests
// describte Employee
describe('Employee', () => {
    // test to verify that the EMployee class can be instantiated
    describe('Instantiate', () => {
        it('should be an instance of Employee class',
        () => {
            const employee = new Employee();

            expect(employee).toBeInstanceOf(Employee);
        });
    });
    // Test to verify that name can be assigned
    describe('Initialize name', () => {
        it('should set name properly', () => {
            const name = 'Jane Doe';
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });
    });
    // Test to verify that id can be assigned 
    describe('Initialize id', () => {
        it('should set id properly', () => {
            const id = '12345';
            const employee = new Employee('Jane Doe', id);

            expect(employee.id).toBe(id);
        });
    });
    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'email@email.com';
            const employee = new Employee('Jane Doe',
            '12345',
            email
            );

            expect(employee.email).toBe(email);
        });
    });
    describe('Initialize getName()', () => {
        it('should get name from getName()', () => {
            const getName = 'Jane Doe';
            const employee = new Employee(getName);
            
            expect(employee.getName()).toBe(getName);
        });
    });
    describe('Initialize getId()', () => {
        it('should get id from getId()', () => {
            const getId = '12345';
            const employee = new Employee('Jane Doe', getId);
            
            expect(employee.getId()).toBe(getId);
        });
    });
    describe('Initialize getEmail()', () => {
        it('should get email from getEmail()', () => {
            const getEmail = 'email@email.com';
            const employee = new Employee('Jane Doe', 
            '1234',
            getEmail);
            
            expect(employee.getEmail()).toBe(getEmail);
        });
    });
    describe('Initialize getRole()', () => {
        it('should get role from getRole()', () => {
            const getRole = 'Employee';
            const employee = new Employee('Jane Doe',
            '12345',
            'email@email.com',
            getRole);
            
            expect(employee.getRole()).toBe(getRole);
        });
    });
});