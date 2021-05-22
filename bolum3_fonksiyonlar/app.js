// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Fonksiyonun tanımlanması
function yazdir() {
  console.log("Ahmet");
}
yazdir(); // Fonks. çağrılması

// Örnek: Parametreli Fonksiyon
function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Mustafa", 23); // Call | invoke
yazdirAd("John", 21); // call | invoke

// Örnek: Parametreli, dönüş değerli Fonksiyon
function yasHesapla(dogum) {
  return 2021 - dogum;
}
console.log(`Yasiniz: ${yasHesapla(1990)}`);
alert(`Yasiniz: ${yasHesapla(1910)}`);
const yas = yasHesapla(1995);
console.log(`Yasiniz: ${yas}`);

// Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.

const sayiniz = prompt("Sayinizini giriniz:");

// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
console.log(tekCift(sayiniz));

function tekCift(sayiniz) {
  const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir`;
  return sonuc;
}

// ! 2.YÖNTEM  : FUNCTION EXPRESSION
const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "ÇİFT" : "TEK";
};

console.log(tekCift1(5)); // invoke

// ORNEK: Buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

console.log("En büyük:" + buyukBul(5, 3, 8));

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI

const topla = (a, b) => a + b; // Arrow fonk tanimlamasi

console.log(topla(5, 2)); // invoke
console.log(topla(3, 10)); // invoke

// Ornek
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));

// * Ornek: Us alma
const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// * Ornek: Menü
// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız.
const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
};

menu();

// Ornek: Bilgi Ver fonksiyonu
// * 1.YÖNTEM
const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
  return bilgi;
};

// * 2.YÖNTEM
const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;

console.log(bilgiVer("Mehmet", "Cakmak", 1989));

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");

const hacimHesapla = (r, h) => Math.PI * r * r * h;
// * En yakın sayiya yuvarlar.
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));
// * Virgulden sonra 2 basamak alir.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));
