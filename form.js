new Vue({
  el: '#app',
    data: {
    ad: '',
    soyad: '',
    dogumTarihi: '',
    email: '',
    telefon:'',
    cinsiyet: '',
    dusunce: '',
    yildiz: '',
    mesaj: ''
  },
  methods: {
    kontrolEt() {
      if (!this.ad || !this.soyad || !this.dogumTarihi || !this.email || !this.cinsiyet || !this.dusunce || !this.yildiz) {
        this.mesaj = 'Tüm alanları doldurmalısınız!';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.mesaj = 'Geçerli bir email adresi giriniz!';
        return;
      }
      if (!/^\d+$/.test(this.telefon)) {
      this.mesaj = 'Telefon numarası sadece rakamlardan oluşmalıdır!';
      return;
    }
    if (this.telefon.length !== 11) {
    this.mesaj = 'Telefon numarası 11 haneli olmalıdır!';
    return;
  }
      this.mesaj = 'Tüm bilgiler doğru!';
    },
    temizle() {
      this.ad = '';
      this.soyad='',
      this.dogumTarihi = '';
      this.email = '';
      this.telefon='';
      this.cinsiyet = null;
      this.dusunce = '';
      this.yildiz= '';
      this.mesaj = '';
    },
    gonder() {
      this.kontrolEt();
      if (this.mesaj === 'Tüm bilgiler doğru!') {
        const bilgiler = {
          ad: this.ad,
          soyad: this.soyad,
          dogumTarihi: this.dogumTarihi,
          email: this.email,
          telefon:this.telefon,
          cinsiyet: this.cinsiyet,
          dusunce: this.dusunce,
          yildiz: this.yildiz
        };
        localStorage.setItem('iletisimBilgileri', JSON.stringify(bilgiler));
        window.location.href = 'sonuc.html';
      }
    }
  }
});
