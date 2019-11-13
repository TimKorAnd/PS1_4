<section class="nav-panel">
<form class="nav-panel__form" id="reg-form-2" action="" name="form-2" method="post"
      action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <p class="nav-panel__head-title block-element">GAME&nbsp;OF&nbsp;THRONES</p>
    <p class="form-2__join-message block-element">You have successfully joined the game.
        Tell us more about yourself.</p>
    <label  class="input__label block-element" for="username">Who are you?</label>
    <small class="nav-panel__small block-element">Alpha-numeric username</small>
    <input class="nav-panel__input block-element" type="text" name="username" id="username"
           placeholder="arya">

    <label  class="input__label block-element" id="great-house-label" for="selecthouse">Your Great House</label>
    <select class="nav-panel__select-house nav-panel__input block-element" name="selecthouse" id="selecthouse" size="1">
        <!--there are will options appending from js via createHousesOptionsInSelect($houseSelect); -->
    </select>

    <label  class="input__label block-element" id="user-wishes-label" for="user-wishes">Your preferences, hobbies, wishes, etc.</label>
    <textarea class="nav-panel__wishes nav-panel__input block-element" name="userwishes" id="user-wishes"
              placeholder="I have a long TOKILL list.."></textarea>
    <input type="submit" class="nav-panel__submit-button block-element" id="form-2__submit-button" value="Save">


</form>
</section>