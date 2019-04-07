/* CONSTANTS */

const EMAIL_VALID_REGEX = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const NOT_EMPTY_VALID = /^.+$/;

/*bind a event listener with specified func to each from array of DOM elements*/
function eventLoader(action, func, elementsId, options) {
    elementsId.forEach((value)=>{
        let el = document.getElementById(value);
        el.addEventListener(action, func, options);
    });
}

function start(){

    eventLoader('blur', () => {
        registration('right-panel__form-1__email',
        'right-panel__form-1__password',
        'remember-me-checkbox','right-panel__form-1__submit-button');
        eventLoader('input', () => registration('right-panel__form-1__email',
            'right-panel__form-1__password',
            'remember-me-checkbox','right-panel__form-1__submit-button'),
            ['right-panel__form-1__email'],{once:false});
        },
        ['right-panel__form-1__email'],{once:true});

    eventLoader('blur', () => {
            registration('right-panel__form-1__email',
                'right-panel__form-1__password',
                'remember-me-checkbox','right-panel__form-1__submit-button');
            eventLoader('input', () => registration('right-panel__form-1__email',
                'right-panel__form-1__password',
                'remember-me-checkbox','right-panel__form-1__submit-button'),
                ['right-panel__form-1__password'],{once:false});
        },
        ['right-panel__form-1__password'],{once:true});


    eventLoader('click', () => registration('right-panel__form-1__email',
        'right-panel__form-1__password',
        'remember-me-checkbox','right-panel__form-1__submit-button'),
        ['right-panel__form-1__submit-button'],{once:false});
}


/* return true if input valid = match regExp, false if not */
function isValid(formInputsObj){
    function showInputValid(validness,inputId) {
        const elem = document.getElementById(inputId);
        if (validness){
            elem.className = 'right-panel__input block-element'
        } else {
            elem.className = 'right-panel__input--invalid block-element';
        }
    }
    let ret = true;
    formInputsObj.forEach((currObj)=>{
        let result;
        showInputValid(result = currObj.regTemplate.test(document.getElementById(currObj.inputId).value), currObj.inputId);
        if (ret) {
            ret = result;
        };
    });
    return ret;
}

function registration(rightPanelForm1Email, rightPanelForm1Password, rememberMeCheckbox,rightPanelForm1SubmitButton) {

    if (!isValid([{regTemplate:EMAIL_VALID_REGEX,inputId:rightPanelForm1Email},
        {regTemplate:PASSWORD_VALID_REGEX,inputId:rightPanelForm1Password}])){
        console.log('isValid false');
        /*invalidInputsShow();*/
        return;

    } else {
        console.log('isValid true');
    }

}