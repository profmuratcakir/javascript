// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                        DİZİLERDE İTERASYON
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ======================================================
//                     FOR DÖNGÜSÜ
// ======================================================

const koordinatlar = [120, 100, -100, 220, 330];
let negatif = 0;
let pozitif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}

console.log(
  `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
);

// ======================================================
//                   FOR IN DÖNGÜSÜ
// ======================================================

//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------

const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
const ara = prompt("aramak istenilen hayvan türünü giriniz:").toLowerCase();

const bulDondur = function () {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayisi++;
    }
  }
  return hayvanSayisi;
};
const sayi = bulDondur(ara);
sayi == 0
  ? console.log("Aradiginiz hayvan bulunamadi")
  : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);

// ======================================================
//                   FOR OF DÖNGÜSÜ
// ======================================================

// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar = ["BMW", "Volvo", "Mini"];
let yazı = "";
for (let i of arabalar) {
  console.log(i);
  yazı += i + " "; // i:  dizinin i. elemani demektir.
}
console.log(yazı);

// ======================================================
//                   FOREACH METODU
// ======================================================

//-------------- ÖRNEK -------------------
let ogrenciler = ["John", "Ali", "Can"];

function yazdır(a) {
  console.log(a);
}

ogrenciler.forEach(yazdır);
ogrenciler.forEach((x) => console.log(x));

//-------------- ÖRNEK -------------------
const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//-------------- ÖRNEK -------------------
// forEach ile Parametre kullanım detaylari
toplam = 0;
fiyatlar.forEach((a, i, d) => {
  toplam += a;
  console.log(` ${i} . iterasyon: ${toplam}`);
});

console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//-------------- ÖRNEK -------------------
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);

// ======================================================
//                       MAP METODU
// ======================================================

//-------------- ÖRNEK -------------------
// Örnek : Dizinin herbir elemaninin 2 katını aliniz.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat, rakamlar);

//-------------- ÖRNEK -------------------
// isimler dizisin içerisindeki her ismi büyük harf olarak
// yeni bir diziye saklayalım.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));

// map() metodundan sonra eğer forEach gibi bir terminal işlemi
// kullanılırsa map() metodu bir dizi döndürmez.
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarini HTLM inputlarina girilen
// Dolar ve Euro paritelerine göre dolar ve euroya çevirerek HTML de
// gösteriniz.
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];

// Kur inputlarini al.
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

//dolar ve euro fiyatlari yazacak elemanlari al
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

// dolar kur input'unun değeri degistiginde urunlerin
// dolar fiyatlarini güncelle.
dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

// euro kur input'unun değeri degistiginde urunlerin
// euro fiyatlarini güncelle.
yuroKur.onchange = function () {
  yuroKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
// %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
// zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL gibi

const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br> `;
  } else {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br> `;
  }
});
const stringZamliTLFiyatlar = zamliTlFiyatlar.join("");
console.log(stringZamliTLFiyatlar);
document.querySelector(".zamli-fiyat").innerHTML = stringZamliTLFiyatlar;

// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.

const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);

//fiyati 350 küçük olanlari yazdiriniz.
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));

// Küçükten büyüğe sıralama
console.log(tlFiyatlar.sort((a, b) => a - b));

// Büyükten küçüğe sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));

// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
console.log(zamliMaaslar);

// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.
maaslar
  .filter((d) => d > 4000)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));

//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

const isimBul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  adlar.filter((x) => x.startsWith(buyukHarf)).forEach((x) => console.log(x));
};

isimBul("a");
isimBul("A");
isimBul("S");
isimBul("s");

// ======================================================
//                       REDUCE METODU
// ======================================================
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
// maaslarin toplamini bulunuz.
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(`${i} iterasyon : ${x}`);
  return x + y;
});
console.log(toplamMaas1);

// 4000 den buyuk olan maaslarin toplamini hesaplayiniz.

const buyukDortBin = maaslar
  .filter((x) => x >= 4000)
  .reduce((x, y) => x + y, 0);

console.log(buyukDortBin);

// maasi ortalamanin altinda olanlara %20 zam yapalim.
const ortalamaMaas = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
const yeniMaaslar = maaslar
  .filter((m) => m >= ortalamaMaas)
  .map((m) => m * 1.1);
console.log(yeniMaaslar);
