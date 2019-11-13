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

    $jsScriptName = '';
   if (!$user->isSignedIn()) {
       $jsScriptName = './js/scriptForm1.js';
       include_once('./html/reg-form-1.php');
   }
   else {
       $jsScriptName = './js/scriptForm2.js';
       include_once('./html/reg-form-2.php');

   }

   /*include_once ('./html/reg-form-2.php') */
   /*include_once ('./html/reg-form-3.php') */


include_once('./html/footer.php');


