/* CONSTANTS */

const EMAIL_VALID_REGEXP = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
//const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const PASSWORD_VALID_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const VALID_CLASS = '--valid';
const INVALID_CLASS = '--invalid';


/*class for inputs*/
class InputField {
    constructor(inputId, VALID_REGEXP){
    this.inputId = inputId;
    this.element = document.getElementById(this.inputId);
    this.VALID_REGEXP = VALID_REGEXP;
    }
    /*return true if regexp match the input value*/
    isValid() {
            return this.VALID_REGEXP.test(this.element.value);
    };
    /*write valid/invalid class in input DOM elem*/
    viewValidation() {
            let statusSearch = VALID_CLASS, statusReplace = INVALID_CLASS;
            if (this.isValid()) {
                [statusSearch, statusReplace] = [statusReplace, statusSearch];
            };
            this.element.className = this.element.className.replace(statusSearch, statusReplace);
        };
}

function submitHandler(event, btnSubmit, inputElems, submitFunc) {
    event.preventDefault();
    if (inputElems.every((currInputElem) => {
        return currInputElem.isValid();
    })) {
        submitFunc();
    } /*else {
        event.preventDefault();
    }*/
}

function changeSubmitedForm(submitedForm, nextForm) {
    submitedForm.style.display = 'none';
    nextForm.style.display = 'block';
}

function start(){
    /*get form1 DOM elems */
    let emailInput = new InputField('right-panel__form-1__email', EMAIL_VALID_REGEXP);
    emailInput.element.addEventListener('blur', () =>  {
            emailInput.viewValidation();
            emailInput.element.addEventListener('input', emailInput.viewValidation.bind(emailInput),{once:false});
        }
        ,{once:true});

    let passwordInput = new InputField('right-panel__form-1__password', PASSWORD_VALID_REGEX);
    passwordInput.element.addEventListener('blur', () =>  {
            passwordInput.viewValidation();
            passwordInput.element.addEventListener('input', passwordInput.viewValidation.bind(passwordInput),{once:false});
        }
        ,{once:true});

    const btnForm1 = document.getElementById('right-panel__form-1__submit-button');
    /*btnForm1.addEventListener('submit', (event) => submitHandler(event, btnForm1, [emailInput, passwordInput]));*/

    const form1 = document.getElementById('right-panel__form-1');
    const form2 = document.getElementById('right-panel__form-2');
    form1.addEventListener('submit',(event) => submitHandler(event, btnForm1, [emailInput, passwordInput], () => changeSubmitedForm(form1,form2)));

}





