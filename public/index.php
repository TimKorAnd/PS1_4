<?php session_start(['name'=>'sayMyName']);

    require_once '../src/Registrator.php';
    $user = $_SESSION['user'] ?? new Registrator();
    SessionStore::storeinSession('user', $user);


    include_once('./html/header.html');

    include_once ('./html/great-house-logo-panel.html');



//   if (!$user->isSignedIn())
       include_once ('./html/reg-form-1.php');

   /*include_once ('./html/reg-form-2.php') */
   /*include_once ('./html/reg-form-3.php') */


include_once('./html/footer.php');


