'use strict'
$(() => {
    const $houseSlider = $('#houses-slider');
    /!*create DOM elems in slider*!/
    createHousesElemsInSlider($houseSlider);
    /!*slider init*!/
    $houseSlider.slick({
        arrows: true,
        dots: true
    });
})

/* CONSTANTS */

const EMAIL_VALID_REGEXP = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
//const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const PASSWORD_VALID_REGEX = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/;
const USERNAME_VALID_REGEX = /^[\d\w]+$/;
const USERWISHES_VALID_REGEX = /^.+$/;
const SELECTHOUSE_VALID_REGEX = /.+/;
const ERROR_FIELD_CLASS = 'input--invalid';
const HOUSES = ['Arryn', 'Baratheon', 'Bolton', 'Frey', 'Greyjoy', 'Lannister',
    'Martell', 'Nightwatchs', 'Stark', 'Targarien', 'Tully', 'Tyrell'];
const IMG_PATH = 'img/';
const IMG_TYPE = '.png';

/*class for inputs*/
class InputField {
    constructor(inputId, VALID_REGEXP, firstEventType, secondEventType, isShowPin = false) {
        this.inputId = inputId;
        this.element = document.getElementById(this.inputId);
        this.VALID_REGEXP = VALID_REGEXP;
        this.isShowPin = isShowPin;
        this.addEvents(firstEventType, secondEventType);
    }

    /*return true if regexp match the input value*/
    isValid() {
        if (this.element.nodeName === 'SELECT') {
            return this.element.value !== '';
        }
        return this.VALID_REGEXP.test(this.element.value);
    };

    /*write valid/invalid class in input DOM elem*/
    viewValidation() {
        if (this.isValid()) {
            this.element.classList.remove(ERROR_FIELD_CLASS);
            this.showPin(false);
        } else {
            this.element.classList.add(ERROR_FIELD_CLASS);
            if (this.isShowPin)
                this.showPin(true);
        }

    };

    /*show pin for input from input's title*/
    showPin(displayPin) {
        if (this.element.parentElement.querySelector('.pin') != null && displayPin) {
            return;
        }
        if (!displayPin) {
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
        this.element.parentNode.insertBefore(pinElem, this.element);
    }

    /*add both events listeners to input instances*/
    addEvents(firstEventType, secondEventType) {
        this.element.addEventListener(firstEventType, () => {
                this.viewValidation();
                this.element.addEventListener(secondEventType, this.viewValidation.bind(this), {once: false});
            }
            , {once: true});
    }
}

function createHousesElemsInSlider($houseSlider) {
    HOUSES.forEach((houseName) => {
        houseName = houseName.toLowerCase();
        $houseSlider.append(`<div><img src="${IMG_PATH}${houseName}${IMG_TYPE}"></div>`);
    })
}


/*submit handler - form submited only if specified inputs is valid*/
function submitHandler(event, btnSubmit, inputElems, submitFunc) {
    //event.preventDefault();
    /*if (inputElems.every((currInputElem) => {
        currInputElem.viewValidation();
        return currInputElem.isValid();
    })) {
        submitFunc();
    }*/
}
