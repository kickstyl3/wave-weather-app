function isNameValid(name) {
    let isValid;

    if (name.length >= 3) {
        isValid = true;
    } else if (name.length < 3) {
        isValid = false
    };

    return isValid;
}

function isEmailValid(email) {
    let isValid;

    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    if (email.match(emailPattern)) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

function isPasswordValid(password, confirmPassword) {
    let isValid;

    if (password.length < 6 && password !== confirmPassword) {
        isValid = false;
    } else if (password.length >= 6 && password === confirmPassword) {
        isValid = true;
    };

    return isValid;
}

module.exports = {
    isNameValid,
    isEmailValid,
    isPasswordValid
}