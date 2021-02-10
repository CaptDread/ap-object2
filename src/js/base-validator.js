class BaseValidator{
    constructor(element, options) {
        console.log(`BaseValidator`)
        this.element = element
        this.options = options
        this.errorMessageEl = element.parentElement.querySelector(`.error`)


        this.setup()
    }

    setup() {

        this.element.addEventListener(`change`, this.handleChange)
    }

    handleChange = (evt) => {
        const el = evt.target
        const newValue = el.value
        console.log(`handleChange`, newValue)
        
        this.validate(newValue)
        this.errorMessageEl.textContent = this.errorMessage
    }
}