<?php
return [
    'reg-form' => [
        'form-2-fields' => ['username','psw'],
        'pagesData' => [
            [
                'uri' => './html/reg-form-1.php',
                'scriptName' => './js/scriptForm1.js',
                'formFields' => [
                    'email' => function($email){return(filter_var($email,FILTER_VALIDATE_EMAIL));},
                    'passHash' => function($pass){return hash('sha256',$pass);}
                    ]
            ],
            [
                'uri' => './html/reg-form-2.php',
                'scriptName' => './js/scriptForm2.js'
            ]
        ],
        'voteLifetime' => 60, //TODO change for '60*60*24'
        'candidateList' => ['zerocandidate','candidate1', 'candidate2', 'candidate3', 'four']

    ],
    'files' => [
        '' => '',
    ]
];