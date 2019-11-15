<?php

    require_once '../src/Registrator.php';
    require_once '../src/FormValidator.php';
    require_once '../src/SessionStore.php';
    require_once '../src/FileHandler.php';

    session_start(['name'=>'sayMyName']);

    $user = $_SESSION['user'] ?? new Registrator();
//
//    if (isset($_POST['form-1__submit-button'])){
//        //TODO probably i have to registered a new user at this case
//        $user->sbmtForm();
//    } elseif (isset($_POST['form-2__submit-button'])){
//        $user->addUserData($_POST['username'], $_POST['selecthouse'], $_POST['userwishes']);
//    }
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    $user->sbmtForm();
    include_once('./html/header.html');

    include_once ('./html/great-house-logo-panel.html');

    include_once($user->getCurrentPageData()['uri']);

    include_once('./html/footer.php');


