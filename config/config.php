<?php
return [
    'reg-form' => [
        'pagesData' => [
            [
                'uri' => './html/reg-form-1.php',
                'scriptName' => './js/scriptForm1.js',
                'formFields' => [
                    'email' => function($email){return(filter_var($email,FILTER_VALIDATE_EMAIL));},
                    'psw' => function($pass){return preg_match('/^.{8,}$/', $pass);},
                    'remember-me' => function(){return true;}
                    ]
            ],
            [
                'uri' => './html/reg-form-2.php',
                'scriptName' => './js/scriptForm2.js',
                'formFields' => [
                    'username' => function($username){return true;},
                    'selecthouse' => function($selecthouse){return true;},
                    'userwishes' => function($userwishes){return true;},
              ]
            ]
        ],
        'voteLifetime' => 60, //TODO change for '60*60*24'
        'candidateList' => ['zerocandidate','candidate1', 'candidate2', 'candidate3', 'four']

    ],
    'files' => [
        '' => '',
    ]
];