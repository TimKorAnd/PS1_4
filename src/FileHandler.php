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
        $file = self::$pathAssets.$user->getData('email');
        //$file = self::$pathAssets.'file.txt';

        file_put_contents($file, json_encode($user));
    }
}