class FullNameValidator extends BaseValidator {
    validate(value) {
        let nameInp = document.querySelector(`[name="name"]`)
        var fullNameRE = /^\w+\s+\w{2,}$/
        if (!fullNameRE.test(value)) {
            this.isValid = false
            nameInp.style.border = `1.3px #900 solid`
            this.errorMessage = `Sorry, that doesn't look like a full name`;
        } else {
            this.isValid = true
            nameInp.style.border = `1.1px #777 solid`
            this.errorMessage = "";
        }
    }
}