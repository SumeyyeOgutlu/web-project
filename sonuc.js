window.onload = function() {
  const bilgiler = JSON.parse(localStorage.getItem('iletisimBilgileri'));
  const sonuc = document.getElementById('sonuc');
  if (bilgiler) {
    sonuc.innerHTML = `
      <p>Ad: ${bilgiler.ad}</p>
      <p>Soyad: ${bilgiler.soyad}</p>
      <p>Doğum Tarihi: ${bilgiler.dogumTarihi}</p>
      <p>Email: ${bilgiler.email}</p>
      <p>Telefon: ${bilgiler.telefon}</p>
      <p>Cinsiyet: ${bilgiler.cinsiyet}</p>
      <p>Düşünce: ${bilgiler.dusunce}</p>
      <p>Yıldız: ${bilgiler.yildiz}</p>
    `;
  } else {
    sonuc.innerHTML = '<p>Henüz bilgi gönderilmedi.</p>';
  }
}

function geriDon() {
  localStorage.removeItem('iletisimBilgileri');  // bilgiyi temizle
  window.location.href = 'iletisim.html';       // iletişim sayfasına geri dön
}
