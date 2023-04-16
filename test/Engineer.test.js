// require engineer file
const Engineer = require('../lib/Engineer');

// use jest to run tests
// describte Engineer
describe('Engineer', () => {
    describe('Initialize github', () => {
        it('should set github properly', () => {
            const github = 'GitHub';
            const engineer = new Engineer('Jane Doe', '12345', 'email@email.com', github);

            expect(engineer.github).toBe(github);
        });
    });
    describe('Initialize getGitHub()', () => {
        it('should get github from getHitHub()', () => {
            const getGitHub = 'GitHubName';
            const engineer = new Engineer('Jane Doe', '12345', 'email@email.com', getGitHub);

            expect(engineer.getGitHub()).toBe(getGitHub);
        });
    });
    describe('Initialize getRole()', () => {
        it('should get roel from getRole()', () => {
            const getRole = 'Engineer';
            const engineer = new Engineer('Jane Doe', '12345', 'email@email.com', 'GitHubName', getRole);

            expect(engineer.getRole()).toBe(getRole);
        });
    });
});