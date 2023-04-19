// require manager file
const Manager = require('../lib/Manager');

// use jest to run tests
// describe Manager
describe('Manager', () => {
    describe('Initialize officeNumber', () => {
        it('should set office number properly', () => {
            const officeNumber = '123';
            const manager = new Manager('Jane Doe', '12345', 'email@email.com', officeNumber);

            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
    describe('Initialize getOfficeNumber()', () => {
        it('should get office number from getOfficeNumber()', () => {
            const getOfficeNumber = '123';
            const manager = new Manager('Jane Doe', '12345', 'email@email.com', getOfficeNumber);

            expect(manager.getOfficeNumber()).toBe(getOfficeNumber);
        });
    });
    describe('Initialize getRole()', () => {
        it('should get role from getRole()', () => {
            const getRole = 'Manager';
            const manager = new Manager('Jane Doe', '12345', 'email@email.com', '123', getRole);

            expect(manager.getRole()).toBe(getRole);
        });
    });
});