<!DOCTYPE html>
<html lang="en">
<?php include_once('./html/header.html') ?>
<body>
<div class="container">
  <?php include_once ('./html/great-house-logo-panel.html')?>
<!--there are elems will created from js createHousesElemsInSlider($houseSlider);-->

  <section class="nav-panel">
    //<?php if(isset(__SESSION[''])) ?>
    <?php include_once ('./html/reg-form-1.php') ?>

    <?php include_once ('./html/reg-form-2.php') ?>
    <?php include_once ('./html/reg-form-3.php') ?>

  </section>
</div>
<?php include_once('./html/footer.php')?>
</body>
</html>
