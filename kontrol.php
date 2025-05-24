<?php
$kullanici_adi = $_POST['kullanici_adi'];
$sifre = $_POST['sifre'];

//belirlediğim mail adresi ve sifre
$dogru_mail = "b241210021@sakarya.edu.tr";
$dogru_sifre = "b241210021";

if ($kullanici_adi == $dogru_mail && $sifre == $dogru_sifre) {
    // Mailin '@' işaretinden önceki kısmı
    $numara = explode("@", $kullanici_adi)[0];
    echo "<body style='background-color: #ffcccc;'>";
    echo "<h1 style='text-align:center; margin-top:100px; color: #800000;'>Hoşgeldin $numara</h1>";
    echo "</body>";
} else {
    
    // Başarısızsa uayarı verir 2s'ye bekler ve index sayfasına yönlendir
    echo "<body style='background-color: #ffcccc;'>";
    echo "<h1 style='text-align:center; margin-top:100px; color: #800000;'>Kayıt bulunamadı, tekrar giriş yapın...</h1>";
    echo "</body>";
    header("Refresh:2; url=index.html");
    exit();
   
}
?>
