<?php
return [
    'reg-form' => [
        'form-1-fields' => ['email','psw'],
        'form-2-fields' => ['username','psw'],
        'cookieName' => 'isVoter', // generate smth safe/hash/personal ?
        'voteLifetime' => 60, //TODO change for '60*60*24'
        'candidateList' => ['zerocandidate','candidate1', 'candidate2', 'candidate3', 'four']

    ],
    'files' => [
        'resultsFileJSON' => '../src/voteresults.json',
    ]
];