<?php
    session_start(['name'=>'sayMyName']);
    $_SESSION = [];

    unset($_COOKIE[session_name()]);

    session_destroy();

    $_SERVER['REQUEST_METHOD'] =''; //TODO is this normal action?

    include_once '../public/index.php';