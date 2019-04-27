window.onload = () => {eventsLoader()};
/* CONSTANTS */

const EMAIL_VALID_REGEXP = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
//const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const PASSWORD_VALID_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const USERNAME_VALID_REGEX = /^[\d\w]+$/;
const USERWISHES_VALID_REGEX = /^.+$/;
const SELECTHOUSE_VALID_REGEX = /.+/;
const VALID_CLASS = '--valid';
const INVALID_CLASS = '--invalid';


/*class for inputs*/
class InputField {
    constructor(inputId, VALID_REGEXP, isShowPin = false){
        this.inputId = inputId;
        this.element = document.getElementById(this.inputId);
        this.VALID_REGEXP = VALID_REGEXP;
        this.isShowPin = isShowPin;

    }
    /*return true if regexp match the input value*/
    isValid() {
        if (this.element.nodeName === 'SELECT'){
            return this.element.value !== '';
        }
        return this.VALID_REGEXP.test(this.element.value);
    };
    /*write valid/invalid class in input DOM elem*/
    viewValidation() {
        if (this.isShowPin) {this.showPin();};
        let statusSearch = VALID_CLASS, statusReplace = INVALID_CLASS;
        if (this.isValid()) {
            [statusSearch, statusReplace] = [statusReplace, statusSearch];
        }
        this.element.className = this.element.className.replace(statusSearch, statusReplace);
        };
    /**/
    showPin() {
        let oldPlaceHolder = this.element.placeholder;
        console.log('showPinIsComming');
        /*let pinElem = document.createElement('div');
        let pinContent = document.createTextNode(this.element.title);
        let att = document.createAttribute('class');
        att.value = 'pin';
        pinElem.setAttributeNode(att);
        pinElem.appendChild(pinContent);
        this.element.parentNode.insertBefore(pinElem,this.element);*/
        this.element.placeholder += this.element.title;
        setTimeout(() => {
            /*document.body.removeChild(instance);*/
            this.element.placeholder = oldPlaceHolder;
        }, 5000);
    }
}

function submitHandler(event, btnSubmit, inputElems, submitFunc) {
    event.preventDefault();
    if (inputElems.every((currInputElem) => {
        currInputElem.viewValidation();
        return currInputElem.isValid();
    })) {
        submitFunc();
    }
}

function changeSubmitedForm(submitedForm, nextForm) {
    submitedForm.style.display = 'none';
    nextForm.style.display = 'block';
}

function eventsLoader(){
    /*get form1 DOM elems */
    let emailInput = new InputField('right-panel__form-1__email', EMAIL_VALID_REGEXP);
    emailInput.element.addEventListener('blur', () =>  {
            emailInput.viewValidation();
            emailInput.element.addEventListener('input', emailInput.viewValidation.bind(emailInput),{once:false});
        }
        ,{once:true});

    let passwordInput = new InputField('right-panel__form-1__password', PASSWORD_VALID_REGEX, true);
    passwordInput.element.addEventListener('blur', () =>  {
            passwordInput.viewValidation();
            passwordInput.element.addEventListener('input', passwordInput.viewValidation.bind(passwordInput),{once:false});
        }
        ,{once:true});

    let usernameInput = new InputField('right-panel__form-2__username', USERNAME_VALID_REGEX);
    usernameInput.element.addEventListener('blur', () =>  {
            usernameInput.viewValidation();
            usernameInput.element.addEventListener('input', usernameInput.viewValidation.bind(usernameInput),{once:false});
        }
        ,{once:true});

    let userWishesTextArea = new InputField('right-panel__form-2__userwishes', USERWISHES_VALID_REGEX);
    userWishesTextArea.element.addEventListener('blur', () =>  {
            userWishesTextArea.viewValidation();
            userWishesTextArea.element.addEventListener('input', userWishesTextArea.viewValidation.bind(userWishesTextArea),{once:false});
        }
        ,{once:true});

    let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX);
    selectHouse.element.addEventListener('blur', () =>  {
            selectHouse.viewValidation();
            selectHouse.element.addEventListener('input', selectHouse.viewValidation.bind(selectHouse),{once:false});
        }
        ,{once:true});

    const btnForm1 = document.getElementById('right-panel__form-1__submit-button');
    const btnForm2 = document.getElementById('right-panel__form-2__submit-button');

    const form1 = document.getElementById('right-panel__form-1');
    const form2 = document.getElementById('right-panel__form-2');
    const form3 = document.getElementById('right-panel__form-3');

    form1.addEventListener('submit',(event) => submitHandler(event, btnForm1, [emailInput, passwordInput], () => changeSubmitedForm(form1,form2)));
    form2.addEventListener('submit',(event) => submitHandler(event, btnForm2, [usernameInput, userWishesTextArea, selectHouse], () => changeSubmitedForm(form2,form3)));

}
