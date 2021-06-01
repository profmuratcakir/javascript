// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.

const birey = {
  ad: "Can",
  konum: "Samsun",
  email: "can@gmail.com",
};
// 1.Yöntem Klasik yöntem
let ad1 = birey.ad;
let konum1 = birey.konum;
console.log(ad1, konum1);

ad1 = "Canan";
console.log(birey);

// * 2. YONTEM (OBJECT  DESTRUCTRING)
// ! Destructing kullanilirken "Key" isimleri nesneninki ile ayni olmalıdır aksi takdirde undefined degerler donerler*/
const { ad, konum, email } = birey; // birey nesnesindeki property'leri ayrıştırır.
console.log(ad, konum, email);
birey.ad = "Mustafa"; // birey nesnesindeki ad'ı günceller.
console.log(birey);

function bilgiAl() {
  return {
    id: "101",
    urunAdi: "Apple",
    fiyat: 15000,
  };
}
console.log(bilgiAl());

const { id, urunAdi, fiyat } = bilgiAl();
console.log(id, urunAdi);

// ======================================================
//    YENİ NESİL OPERATORLER: DESTRUCTURING(ARRAY)
// ======================================================

const isimler = ["Ahmet", "Can", "Veli"];

//Klasik yöntem
const isim1 = isimler[0];
const isim2 = isimler[1];

// Destructring
const [kisi1, , kisi3] = isimler;
console.log(kisi1, kisi3);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST  ...
// ======================================================

// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.

// DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// REST (Dizilede kullanım)
const arabalar = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [araba1, araba2, ...geriKalanlar] = arabalar;
console.log(araba1, araba2);
console.log(geriKalanlar);

// NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const personel = {
  isim: "john",
  soyad: "smith",
  meslek: "developer",
};
const { meslek, isim, ...geriKalan } = personel;
console.log(geriKalan);

// DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar = ["Ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["Kamyon", "Kamyonet", "Otobus", "Araba"];

const yeniDizi = [...araclar, ...otomobiller];

const meyveler = ["kiraz", "armut", "şeftali", "üzüm"];
const turunclar = ["limon", "portokal", "mandalina", ...meyveler];
console.log(turunclar);
console.log(yeniDizi);
