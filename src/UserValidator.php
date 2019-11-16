<?php


class UserValidator
{
    public function __construct()
    {

    }

    public static function isPassValid(Registrator $user)
    {
        return FileHandler::getPassHashFromFileForEmail($user->email) === $user->psw;
    }

    public static function getUserData(Registrator &$user)
    {
        $readObj = FileHandler::getUserDataFromFileForEmail($user->email);
        foreach($readObj as $key => $value){
            $user->$key = $value;
        }
    }

    public function checkData($email)
    {
        return true; //TODO add logic , perhaps from config regexp or OPTION_
    }
}