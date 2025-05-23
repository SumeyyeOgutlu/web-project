<?php
$kullanici_adi = $_POST['kullanici_adi'];
$sifre = $_POST['sifre'];

//belirlediğim mail adresi ve sifre
$dogru_mail = "b241210021@sakarya.edu.tr";
$dogru_sifre = "b241210021";

if ($kullanici_adi == $dogru_mail && $sifre == $dogru_sifre) {
    // Mailin '@' işaretinden önceki kısmı
    $numara = explode("@", $kullanici_adi)[0];
    echo "Hoşgeldin $numara";
} else {
    
    // Başarısızsa uayarı verir 2s'ye bekler ve index sayfasına yönlendir
    echo "<h2 style='text-align:center; margin-top:100px; background-color: #ffcccc color:red;'>Kayıt bulunamadı, tekrar giriş yapın...</h2>";
    header("Refresh:2; url=index.html");
    exit();
   
}
?>
