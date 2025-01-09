export const validator = (email, password) => {
    const error = {}
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/
    if (isEmailInvalid(email)) {
        error.email = isEmailInvalid(email)
    }
    if (isPasswordInvalid(password)) {
        error.password = isPasswordInvalid(password)
    }
    return error

}






const isEmailInvalid = (email) => {
    let error = ""
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
        error = 'Email is required'

    }
    else if (!emailRegex.test(email)) {
        error = "Email is invalid"

    }
    return error
}

const isPasswordInvalid = (password) => {
    let error = ""
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/
    if (!password) {
        error = "Password is required"

    }
    else if (!passwordRegex.test(password)) {
        error = "password is invalid"
    }
    return error
}