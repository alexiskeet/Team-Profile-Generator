// require intern file
const Intern = require('../lib/Intern');

// use jest to run tests
// describe Intern
describe('Intern', () => {
    describe('Initialize school', () => {
        it('should set school properly', () => {
            const school = 'UofA';
            const intern = new Intern('Jane Doe', '12345', 'email@email.com', school);

            expect(intern.school).toBe(school);
        });
    });
    describe('Initialize getSchool()', () => {
        it('should get school from getSchool()', () => {
            const getSchool = 'UofA';
            const intern = new Intern('Jane Doe', '12345', 'email@email.com', getSchool);

            expect(intern.getSchool()).toBe(getSchool);
        });
    });
    describe('Initialize getRole()', () => {
        it('should get role from getRole()', () => {
            const getRole = 'Intern';
            const intern = new Intern('Jane Doe', '12345', 'email@email.com', 'UofA', getRole);

            expect(intern.getRole()).toBe(getRole);
        });
    });
});