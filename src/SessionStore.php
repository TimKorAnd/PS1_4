<?php


class SessionStore
{
    public static function storeInSession($nameStore,$objStore){
        $_SESSION[$nameStore] = obj;
    }
}