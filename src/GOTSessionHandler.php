<?php


class GOTSessionHandler
{
    public static function storeInSession($nameStore,$objStore){
        $_SESSION[$nameStore] = $objStore;
    }

    public static function sessionDestroy(){
        $_SESSION = [];
        unset($_COOKIE[session_name()]);
        session_destroy();
        $_SERVER['REQUEST_METHOD'] =''; //TODO is this normal action?

    }
}