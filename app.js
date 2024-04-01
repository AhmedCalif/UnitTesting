function isNameValid(name) {
    return name && name.trim().length >= 2;
}

function isEmailValid(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email && emailRegex.test(email);
}

function isPasswordValid(password) {
    return password && password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password);
}

function validateRegistration(input) {
    const result = {
        isValid: true,
        messages: []
    };

    if (!isNameValid(input.name)) {
        result.isValid = false;
        result.messages.push('Name must be at least 2 characters long.');
    }

    if (!isEmailValid(input.email)) {
        result.isValid = false;
        result.messages.push('Email is invalid.');
    }

    if (!isPasswordValid(input.password)) {
        result.isValid = false;
        result.messages.push('Password must be at least 8 characters long and include at least one number and one uppercase letter.');
    }

    return result;
}

module.exports = { validateRegistration };
