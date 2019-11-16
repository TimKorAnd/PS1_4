<?php


class FileHandler
{
    //private static $config;
    //private static $pathAssets;
    const pathAssets = '../assets/';

    public static function saveUserToJSONFile($user)
    {
        //self::initParentConfig($user);
        $file = self::makeValidFileNameWPathFromEmail($user->getData('email'));
        file_put_contents($file, json_encode($user));
    }

    public static function makeValidFileNameWPathFromEmail($email): string{
        return self::pathAssets.str_replace(['@','.'], '',$email).'.json';
    }

    public static function isFileExistForEmail($email): bool {
        return file_exists(self::makeValidFileNameWPathFromEmail($email));
    }

    public static function getPassHashFromFileForEmail($email)
    {
        $readObj = json_decode(file_get_contents(self::makeValidFileNameWPathFromEmail($email)));
        return $readObj->psw;
    }

    public static function getUserDataFromFileForEmail($email)
    {
        return json_decode(file_get_contents(self::makeValidFileNameWPathFromEmail($email)));
    }

//    /**
//     * @param $user
//     */
//    public static function initParentConfig($user): void
//    {
//        if (empty(self::$config) | self::$pathAssets === '' ) {
//            self::$config = $user->getConfig();
//            self::$pathAssets = self::$config['files']['assetsPath'];
//        }
//    }


}