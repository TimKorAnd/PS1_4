<?php

    require_once '../src/Registrator.php';
    require_once '../src/FormValidator.php';
    require_once '../src/SessionStore.php';
    require_once '../src/FileHandler.php';

    session_start(['name'=>'sayMyName']);

    $user = $_SESSION['user'] ?? new Registrator();

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $user->sbmtForm();
    }

    include_once('./html/header.html');

    include_once ('./html/great-house-logo-panel.html');

    include_once($user->getCurrentPageData()['uri']);

    include_once('./html/footer.php');


