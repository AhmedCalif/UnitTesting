// Test Code: app.js

const { validateRegistration } = require('./app');

describe('validateRegistration', () => {
    test('should validate a correct registration', () => {
        const input = { name: 'John Doe', email: 'john.doe@example.com', password: 'Password123' };
        const result = validateRegistration(input);
        expect(result.isValid).toBeTruthy();
        expect(result.messages.length).toBe(0);
    });

    test('should reject a registration with short name', () => {
        const input = { name: 'J', email: 'john.doe@example.com', password: 'Password123' };
        const result = validateRegistration(input);
        expect(result.isValid).toBeFalsy();
        expect(result.messages).toContain('Name must be at least 2 characters long.');
    });

    test('should reject a registration with invalid email', () => {
        const input = { name: 'John Doe', email: 'invalid-email', password: 'Password123' };
        const result = validateRegistration(input);
        expect(result.isValid).toBeFalsy();
        expect(result.messages).toContain('Email is invalid.');
    });

    test('should reject a registration with weak password', () => {
        const input = { name: 'John Doe', email: 'john.doe@example.com', password: 'pass' };
        const result = validateRegistration(input);
        expect(result.isValid).toBeFalsy();
        expect(result.messages).toContain('Password must be at least 8 characters long and include at least one number and one uppercase letter.');
    });
});


