/* CONSTANTS */

const EMAIL_VALID_REGEXP = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const NOT_EMPTY_VALID = /^.+$/;


/*class for input*/
class InputField {
    constructor(inputId, VALID_REGEXP){
    this.inputId = inputId;
    this.element = document.getElementById(this.inputId);
    this.VALID_REGEXP = VALID_REGEXP;
    }

    isValid() {
            return this.VALID_REGEXP.test(this.element.value);
    };

    viewValidation() {
            let statusSearch = '--valid', statusReplace = '--invalid';
            if (this.isValid()) {
                [statusSearch, statusReplace] = [statusReplace, statusSearch];
            };

            console.log(this.element.className);
            this.element.className = this.element.className.replace(statusSearch, statusReplace);
        };
}

function nextForm(btnForm1, emailInput, passwordInput) {
    console.log('btn    ');
    if (emailInput.isValid() && passwordInput.isValid()) {
        /* btnForm1.setAttribute('disabled', 'false');*/
        console.log('btn  ok  ');
        return true;
    } else {
        console.log('btn    close');
        return false;
    }
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
    /*btnForm1.disabled = true;*/
    /*btnForm1.addEventListener('submit', () => nextForm(btnForm1, emailInput, passwordInput));*/

    const form1 = document.getElementById('right-panel__form-1');
    form1.addEventListener('submit',() => nextForm(btnForm1, emailInput, passwordInput));



}





