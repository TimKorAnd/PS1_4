<?php


class FileHandler
{
    private static $config;
    private static $pathAssets;

    public static function saveUser($user)
    {
        //self::$config = require_once '../config/config.php';
        self::$config = $user->getConfig();
        self::$pathAssets = self::$config['files']['assetsPath'];

        $file = self::makeValidFileNameFrom($user->getData('email'));

        file_put_contents($file, json_encode($user));
    }

    public static function makeValidFileNameFrom($email): string{
        return self::$pathAssets.str_replace(['@','.'], '',$email).'.json';
    }


}