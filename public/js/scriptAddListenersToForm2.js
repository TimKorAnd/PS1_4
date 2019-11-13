$(() => {
    const $houseSelect = $('#selecthouse');
    /*create DOM elems from Houses for select*/
    createHousesOptionsInSelect($houseSelect);
    /*select init*/
    $houseSelect.select2({
        placeholder: 'Select House'
        /*minimumResultsForSearch: Infinity*/
    });

    //eventsLoader($houseSelect, $houseSlider);
})
/*get form2 DOM elems */
let usernameInput = new InputField('username', USERNAME_VALID_REGEX, 'blur', 'input');
let userWishesTextArea = new InputField('user-wishes', USERWISHES_VALID_REGEX, 'blur', 'input');
let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX, 'blur', 'input');

form2.addEventListener('submit', (event) => submitHandler(event, btnForm2,
    [usernameInput, userWishesTextArea/*, selectHouse*/], () => changeSubmitedForm(form2, form3)));
const btnForm2 = document.getElementById('form-2__submit-button');
const form2 = document.getElementById('reg-form-2');

