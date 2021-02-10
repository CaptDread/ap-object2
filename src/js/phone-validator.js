class PhoneNumberValidator extends BaseValidator {
    constructor(element, options) {
        super(element, options)
        console.log(`PhoneValidator`)  
    }


    validate(value) {
        let phoneInp = document.querySelector(`[name="phone"]`)
        var phoneRE = /^\w+\s+\w{2,}$/
        if (!phoneRE.test(value)) {
            this.isValid = false
            phoneInp.style.border = `1.3px #900 solid`
            this.errorMessage = `Sorry, that doesn't look like a full phone`;
        } else {
            this.isValid = true
            phoneInp.style.border = `1.1px #777 solid`
            this.errorMessage = "";
        }
    }
}