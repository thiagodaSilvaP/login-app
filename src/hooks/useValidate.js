export const useValidate = (values) => {
    const errors = {}
    let isSubmit = true

    if (!values.email.trim()) {
        errors.email = 'Email required!'
        isSubmit = false
    }
    if (!values.password.trim()) {
        errors.password = 'Password required!'
        isSubmit = false
    } else if (values.password.length < 5) {
        errors.password = 'Password must be at least 6 characters long '
        isSubmit = false
    }
    return [errors, isSubmit]
}