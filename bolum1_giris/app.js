// * =======================================================
// *                       KONSOL
// * =======================================================
// * Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
console.error("Bu bir hatadır.");
console.warn("Bu bir uyarıdır");

alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// * =======================================================
// *                 DEĞİŞKEN TANIMLAMA
// * =======================================================

//************************ VAR ****************************
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number

pi = "3";
console.log(pi);
console.log(typeof pi); // ? String

pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// * Değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.
isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String

isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//************************ CONST ****************************
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

// const piSayisi = 3.14;
// console.log(piSayisi);
// piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
// console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//************************ LET ****************************
// ? Eğerki değişkenimİzin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

// String tanımlamak için 3 farklı karakter kullanılabilir.
let isim1 = "Mustafa"; // Çift tırnak
let isim2 = "Ahmet"; // Tek tırnak
let isim3 = `Alican`; // Backtick

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================
const sucuk = 40;
const sakız = 2;
const kola = 5;
let toplamFiyat = sucuk + sakız + kola;
toplamFiyat++;
toplamFiyat += 50;

// ! Birden fazla değişkenin değerini yazdırmak için virgül kullanılır.
console.log(toplamFiyat, kola); // ? 98 5
console.log("TOPLAM:", toplamFiyat); // ? TOPLAM: 98

// ! + operatörü string birleştirme işlemi de gerçekleştirir.
const ad = "Can";
const soyAd = "Canan";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const s1 = 7,
  s2 = "7";

console.log(s1 + s2);

// ! Template Literal ( String Şablonları, ES6 ile gelmiştir. )
const ad1 = "Mesut";
const yaş = 55;

console.log("Benim adım " + ad1 + " " + "yaşım " + yaş + " dır");
console.log(`Benim adım ${ad1} yaşım ${yaş} dır`);

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAŞ:" + sene);
// console.log("YAŞ:" + yıl - dogumTarihi);   // !Hata --->  NaN = Not a Number
console.log("YAŞ:" + (yıl - dogumTarihi));
console.log(`YAŞ:${yıl - dogumTarihi}`); // * Template Literal ile yazdırma.

const taban = 2;
const us = 8;
const sonuc = taban ** us; // ? Us alma operatoru
console.log(sonuc);

// ÖRNEK: (Mod alma %)
const sayi = 123;
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);

console.log("Birler:" + birler);
console.log("Onlar:" + onlar);
console.log("Yuzler:" + yuzler);

// * =======================================================
// *         KARŞILAŞTIRMA ve LOJİK OPERATÖRLER
// * =======================================================
// ! 3'lü karşılaştırma operatörü kullanıldığında hem veri tipi hem de içerik kontrolü yapılır.
const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2);
console.log(sayi1 == sayi2); // true
console.log(sayi1 === sayi2); // false

const x = true;
const y = true;
const z = undefined;
console.log(x && y && z); // undefined

// * =======================================================
// *                      TERNARY
// * =======================================================

// const age = +prompt("Yasinizi giriniz:");
const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:"));

age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

// ÖRNEK
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;
console.log(result);

// ÖRNEK
const sayi4 = 41;
console.log(String(sayi4), sayi4);
