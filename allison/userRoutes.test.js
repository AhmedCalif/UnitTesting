const request = require('supertest');
const app = require('./userRoutes'); 

describe('Retrieve a specific user by ID', () => {
    test('It should return the user details for a valid ID', async () => {
        const userId = 1; 
        const response = await request(app)
            .get(`/users/${userId}`)
            .expect(200);

        expect(response.body).toHaveProperty('id', userId);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
    });

    test('It should return a 404 for a user that does not exist', async () => {
        const userId = 999; 
        await request(app)
            .get(`/users/${userId}`)
            .expect(404);
    });
});

describe('Create a new user with incomplete data', () => {
    test('It should reject a new user without an email and return 400 status code', async () => {
        const newUser = { name: 'Incomplete User' }; 
        const response = await request(app)
            .post('/users')
            .send(newUser)
            .expect(400);

        expect(response.body).toHaveProperty('message', 'Name and email are required');
    });

    test('It should reject a new user without a name and return 400 status code', async () => {
        const newUser = { email: 'noName@example.com' }; 
        const response = await request(app)
            .post('/users')
            .send(newUser)
            .expect(400);

        expect(response.body).toHaveProperty('message', 'Name and email are required');
    });
});
