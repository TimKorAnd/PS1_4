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
    constructor(inputId, VALID_REGEXP, firstEventType, secondEventType, isShowPin = false){
        this.inputId = inputId;
        this.element = document.getElementById(this.inputId);
        this.VALID_REGEXP = VALID_REGEXP;
        this.isShowPin = isShowPin;
        this.addEvents(firstEventType, secondEventType);
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
        let statusSearch = VALID_CLASS, statusReplace = INVALID_CLASS;
        if (this.isValid()) {
            [statusSearch, statusReplace] = [statusReplace, statusSearch];
            this.showPin(false);
        } else {
            if (this.isShowPin)
            this.showPin(true);
        }
        this.element.className = this.element.className.replace(statusSearch, statusReplace);
        };
    /*show pin for input from input's title*/
    showPin(displayPin) {
        if (this.element.parentElement.querySelector('.pin') != null && displayPin) {
            return;
        }
        if (!displayPin ){
            if (this.element.parentElement.querySelector('.pin') != null) {
                this.element.parentElement.querySelector('.pin').remove();
            }
            return;
        }
        let pinElem = document.createElement('div');
        let pinContent = document.createTextNode(this.element.title);
        let att = document.createAttribute('class');
        att.value = 'pin';
        pinElem.setAttributeNode(att);
        pinElem.appendChild(pinContent);
        this.element.parentNode.insertBefore(pinElem,this.element);
    }
    /*add both events listeners to input instances*/
    addEvents(firstEventType,secondEventType) {
        this.element.addEventListener(firstEventType, () =>  {
                this.viewValidation();
                this.element.addEventListener(secondEventType, this.viewValidation.bind(this),{once:false});
            }
            ,{once:true});
    }
}
/*submit handler - form submited only if specified inputs is valid*/
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
    let emailInput = new InputField('right-panel__form-1__email', EMAIL_VALID_REGEXP, 'blur','input');
    let passwordInput = new InputField('right-panel__form-1__password', PASSWORD_VALID_REGEX, 'blur', 'input',true);
    /*get form2 DOM elems */
    let usernameInput = new InputField('right-panel__form-2__username', USERNAME_VALID_REGEX, 'blur', 'input');
    let userWishesTextArea = new InputField('right-panel__form-2__userwishes', USERWISHES_VALID_REGEX, 'blur', 'input');
    let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX, 'blur', 'input');

    const btnForm1 = document.getElementById('right-panel__form-1__submit-button');
    const btnForm2 = document.getElementById('right-panel__form-2__submit-button');

    const form1 = document.getElementById('right-panel__form-1');
    const form2 = document.getElementById('right-panel__form-2');
    const form3 = document.getElementById('right-panel__form-3');

    form1.addEventListener('submit',(event) => submitHandler(event, btnForm1,
        [emailInput, passwordInput], () => changeSubmitedForm(form1,form2)));
    form2.addEventListener('submit',(event) => submitHandler(event, btnForm2,
        [usernameInput, userWishesTextArea, selectHouse], () => changeSubmitedForm(form2,form3)));
}
