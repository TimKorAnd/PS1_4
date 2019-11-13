<section class="nav-panel">
<form class="nav-panel__form" id ="reg-form-1" name="form_1" method="post"
      action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <p class="nav-panel__head-title block-element">GAME&nbsp;OF&nbsp;THRONES</p>
    <label class="input__label block-element" for="user-email">Enter your e-mail:</label>
    <input class="nav-panel__input block-element" type="email" name="email" id="user-email"
           value="<?php $user->getData('email')?>" placeholder="arya@westeros.com">
    <span class="error"><?php echo '$emailErr';?></span>

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
    <span class="error"><?php echo "$pswErr";?></span>

    <div class="nav-panel__custom-checkbox">
        <input type="checkbox" class="nav-panel__checkbox block-element" name="remember-me"
               value="Remember me" id="remember-me-checkbox" <?php if ($user->getData('rememberMe')){echo 'checked';}?>">
        <label for="remember-me-checkbox" class="nav-panel__label-checkbox block-element">Remember me</label>
    </div>
    <input type="submit" class="nav-panel__submit-button block-element" id="form-1__submit-button" name="form-1__submit-button" value="Sign up">
</form>
</section>
