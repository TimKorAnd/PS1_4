$(() => {
    const $houseSlider = $('#houses-slider');
    const $houseSelect = $('#selecthouse');


    /*create DOM elems from Houses for select*/
    createHousesOptionsInSelect($houseSelect);
    /*select init*/
    $houseSelect.select2({
        placeholder: 'Select House'
        /*minimumResultsForSearch: Infinity*/
    });

    eventsLoaderForm2($houseSelect, $houseSlider);
    if(sliderPositionIndex)
    $houseSlider.slick('slickGoTo', sliderPositionIndex);
})

function eventsLoaderForm2($houseSelect, $houseSlider) {
    /*get form2 DOM elems */
    let usernameInput = new InputField('username', USERNAME_VALID_REGEX, 'blur', 'input');
    let userWishesTextArea = new InputField('user-wishes', USERWISHES_VALID_REGEX, 'blur', 'input');
    let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX, 'blur', 'input');

    $houseSelect.on('select2:select', (e) => {
        console.log(e.params.data.id);
        $houseSlider.slick('slickGoTo', e.params.data.id);

    });
    $houseSlider.on('afterChange', () => {
        $houseSelect.val($houseSlider.slick('slickCurrentSlide'));
        $houseSelect.trigger('change.select2');
    });

    const btnForm2 = document.getElementById('form-2__submit-button');
    const form2 = document.getElementById('reg-form-2');

    form2.addEventListener('submit', (event) => submitHandler(event, btnForm2,
        [usernameInput, userWishesTextArea/*, selectHouse*/], () => changeSubmitedForm(form2, form3)));
}

function createHousesOptionsInSelect($houseSelect) {
    HOUSES.map((houseName, index) => {
        return new Option('House ' + houseName, index + '', index === 0, false);
    }).forEach((option) => {
        option.className = 'nav-panel__select-house-option';
        $houseSelect.append(option);
    });
}
