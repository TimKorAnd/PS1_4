/* CONSTANTS */

const EMAIL_VALID_REGEX = /^(\w+(-(?=\w))?\w+)@\w+\.(\w+(-(?=\w))?\w+)$/;
const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const NOT_EMPTY_VALID = /^.+$/;

/*bind a event listener with specified func to each from array of DOM elements*/
function eventLoader(action, func, elementsId) {
    elementsId.forEach((value)=>{
        let el = document.getElementById(value);
        el.addEventListener(action, (e) => {func.call();},true);
    });
}

/*remove a event listener with specified func to each from array of DOM elements*/
function eventRemover(action, func, elementsId) {
    elementsId.forEach((value)=>{
        let el = document.getElementById(value);
        el.removeEventListener(action, (e) => {func.call();},true);
    });
}



function start(){
    eventLoader('blur', () => registration('right-panel__form-1__email',
        'right-panel__form-1__password',
        'remember-me-checkbox','right-panel__form-1__submit-button'),
        ['right-panel__form-1__email', 'right-panel__form-1__password']);

    eventLoader('click', () => registration('right-panel__form-1__email',
        'right-panel__form-1__password',
        'remember-me-checkbox','right-panel__form-1__submit-button'),
        ['right-panel__form-1__submit-button']);
}


/* return true if input valid = match regExp, false if not */
function isValid(formInputsObj){
    return formInputsObj.every((currObj)=>{
        return (currObj.regTemplate.test(document.getElementById(currObj.inputId).value))
    });
}

function registration(rightPanelForm1Email, rightPanelForm1Password, rememberMeCheckbox,rightPanelForm1SubmitButton) {

    if (isValid([{regTemplate:EMAIL_VALID_REGEX,inputId:rightPanelForm1Email},
            {regTemplate:PASSWORD_VALID_REGEX,inputId:rightPanelForm1Password}])){
        console.log('isValid ok');
        eventRemover('blur', () => registration('right-panel__form-1__email',
            'right-panel__form-1__password',
            'remember-me-checkbox','right-panel__form-1__submit-button'),
            ['right-panel__form-1__email', 'right-panel__form-1__password']);
        eventLoader('input', () => registration('right-panel__form-1__email',
            'right-panel__form-1__password',
            'remember-me-checkbox','right-panel__form-1__submit-button'),
            ['right-panel__form-1__email', 'right-panel__form-1__password']);

    }
}