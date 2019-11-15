<?php
return [
    'reg-form' => [
        'pagesData' => [
            [
                'uri' => './html/reg-form-1.php',
                'scriptName' => './js/scriptForm1.js',
                'formFields' => [
                    'email' => function($email){return(filter_var($email,FILTER_VALIDATE_EMAIL));},
                    'psw' => function($pass){return preg_match('/^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/', $pass);},
                    'remember-me' => function(){return true;}
                    ]
            ],
            [
                'uri' => './html/reg-form-2.php',
                'scriptName' => './js/scriptForm2.js',
                'formFields' => [
                    'username' => function($username){return preg_match('/^[\d\w]+$/', $username);},
                    'selecthouse' => function($selecthouse){return true;},
                    'userwishes' => function($userwishes){return preg_match('/^.+$/',$userwishes);},
              ]
            ]
        ],
        'errors' => [
            'email'=>'Enter real email, please',
            'psw' => 'password should contain at least one upper case letter, one low case letter and one digit',
            'username' => 'name should contain at least one symbol',
            'userwishes' => 'wishes should contain at least one symbol',
        ],
    ],
    'files' => [
        '' => '',
    ]
];