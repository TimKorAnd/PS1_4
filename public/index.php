<?php session_start(['name'=>'sayMyName']) ?>
<?php
    require_once '../src/Registrator.php';
    $user = $_SESSION['user'] ?? new Registrator();
?>

<?php include_once('./html/header.html') ?>

  <?php include_once ('./html/great-house-logo-panel.html')?>
<!--there are elems will created from js createHousesElemsInSlider($houseSlider);-->


<!--    if (!$user->isSignedIn())-->
    <?php include_once ('./html/reg-form-1.php') ?>

    <?php /*include_once ('./html/reg-form-2.php') */?>
    --><?php /*include_once ('./html/reg-form-3.php') */?>


<?php include_once('./html/footer.php')?>

