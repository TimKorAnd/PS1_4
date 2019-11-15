<section class="nav-panel">
<form class="nav-panel__form" id ="reg-form-1" name="form_1" method="post"
      action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <p class="nav-panel__head-title block-element">GAME&nbsp;OF&nbsp;THRONES</p>
    <label class="input__label block-element" for="user-email">Enter your e-mail:</label>
    <input class="nav-panel__input block-element" type="email" name="email" id="user-email"
           value="<?php echo $user->getData('email')?>" placeholder="arya@westeros.com">
    <span class="error-php"><?php echo $user->getError('email');?></span>

    <label class="input__label block-element" for="user-password"
           title="should contain at least one upper case letter, one low case letter and one digit">
        Choose secure password:
    </label>
    <small class="nav-panel__small block-element"
           title="should contain at least one upper case letter, one low case letter and one digit">
        Must be at least 8 characters
    </small>
    <input class="nav-panel__input block-element" type="password" name="psw" id="user-password"
           placeholder="password"
           title="should contain at least one upper case letter, one low case letter and one digit">
    <span class="error-php"><?php echo $user->getError('psw');?></span>

    <div class="nav-panel__custom-checkbox">
        <input type="hidden" class="nav-panel__checkbox block-element" name="remember-me"
               value="0" id="remember-me-checkbox-hidden" >
        <input type="checkbox" class="nav-panel__checkbox block-element" name="remember-me"
               value="1" id="remember-me-checkbox" <?php if ($user->getData('remember-me')){echo 'checked';}?>>
        <label for="remember-me-checkbox" class="nav-panel__label-checkbox block-element">Remember me</label>
    </div>
    <input type="submit" class="nav-panel__submit-button block-element" id="form-1__submit-button" name="form-1__submit-button" value="Sign up">
</form>
</section>
