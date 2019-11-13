
$(() => {
    const $houseSlider = $('#houses-slider');
    /*create DOM elems in slider*/
    createHousesElemsInSlider($houseSlider);
    /*slider init*/
    $houseSlider.slick({
        arrows: true,
        dots: true/*,
        variableWidth: true*/
    });
    eventsLoaderForm1($houseSlider);
})
function createHousesElemsInSlider($houseSlider) {
    HOUSES.forEach((houseName) => {
        houseName = houseName.toLowerCase();
        $houseSlider.append(`<div><img src="${IMG_PATH}${houseName}${IMG_TYPE}"></div>`);
    })
}


function eventsLoaderForm1($houseSlider) {
    /*get form1 DOM elems */
    let emailInput = new InputField('user-email', EMAIL_VALID_REGEXP, 'blur', 'input');
    let passwordInput = new InputField('user-password', PASSWORD_VALID_REGEX, 'blur', 'input', true);
    /*/!*get form2 DOM elems *!/
    let usernameInput = new InputField('username', USERNAME_VALID_REGEX, 'blur', 'input');
    let userWishesTextArea = new InputField('user-wishes', USERWISHES_VALID_REGEX, 'blur', 'input');
    let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX, 'blur', 'input');*/

    // $houseSlider.on('afterChange', () => {
    //     $houseSelect.val($houseSlider.slick('slickCurrentSlide'));
    //     $houseSelect.trigger('change.select2');
    // });


    const btnForm1 = document.getElementById('form-1__submit-button');
    /*const btnForm2 = document.getElementById('form-2__submit-button');*/

    const form1 = document.getElementById('reg-form-1');
    /*const form2 = document.getElementById('reg-form-2');*/
    //const form3 = document.getElementById('reg-form-3');

    form1.addEventListener('submit', (event) => submitHandler(event, btnForm1,
        [emailInput, passwordInput], () => changeSubmitedForm(form1, form2)));
    /*form2.addEventListener('submit', (event) => submitHandler(event, btnForm2,
        [usernameInput, userWishesTextArea/!*, selectHouse*!/], () => changeSubmitedForm(form2, form3)));*/
}