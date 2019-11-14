
$(() => {
    const $houseSlider = $('#houses-slider');

     eventsLoaderForm1($houseSlider);
})



function eventsLoaderForm1($houseSlider) {
    /*get form1 DOM elems */
    let emailInput = new InputField('user-email', EMAIL_VALID_REGEXP, 'blur', 'input');
    let passwordInput = new InputField('user-password', PASSWORD_VALID_REGEX, 'blur', 'input', true);

    const btnForm1 = document.getElementById('form-1__submit-button');

    const form1 = document.getElementById('reg-form-1');

    form1.addEventListener('submit', (event) => submitHandler(event, btnForm1,
        [emailInput, passwordInput], () => changeSubmitedForm(form1, form2)));
}