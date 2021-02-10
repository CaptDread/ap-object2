class EmailValidator extends BaseValidator {
    constructor(element, options) {
        super(element, options)
        console.log(`EmailValidator`)  
    }
    
    
    validate(value) {
        let emailInp = document.querySelector(`[name="email"]`)
        var emailRE = /^\w+@\w+\.\w{2,3}$/
        if (!emailRE.test(value)) {
            this.isValid = false
            emailInp.style.border = `1.3px #900 solid`
            this.errorMessage = `invalid email format`
        } else {
            this.isValid = true
            emailInp.style.border = `1.1px #777 solid`
            this.errorMessage = "";
        }
    }
}