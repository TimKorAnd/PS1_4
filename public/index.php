<?php

    require_once '../src/Registrator.php';
    require_once '../src/FormValidator.php';
    require_once '../src/SessionStore.php';
    require_once '../src/FileHandler.php';

    session_start(['name'=>'sayMyName']);

    $user = $_SESSION['user'] ?? new Registrator();

    if (isset($_POST['form-1__submit-button'])){
        //TODO probably need to sign in new user
        $user->signUp($_POST['email'], $_POST['psw']);
    }

    include_once('./html/header.html');

    include_once ('./html/great-house-logo-panel.html');

    $isDisplayedForm2 = false;
   if (!$user->isSignedIn()) {
       include_once('./html/reg-form-1.php');
   }
   else {
       include_once('./html/reg-form-2.php');
       $isDisplayedForm2 = true;
   }

   /*include_once ('./html/reg-form-2.php') */
   /*include_once ('./html/reg-form-3.php') */


include_once('./html/footer.php');


